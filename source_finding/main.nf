#!/usr/bin/env nextflow

nextflow.enable.dsl = 2

// ----------------------------------------------------------------------------------------
// Processes
// ----------------------------------------------------------------------------------------

// Create scripts for running SoFiA via SoFiAX
process s2p_setup {
    container = params.S2P_IMAGE
    containerOptions = '--bind /mnt/shared:/mnt/shared'

    input:
        val image_cube_file
        val sofia_parameter_file_template

    output:
        val "${params.WORKDIR}/${params.RUN_NAME}/${params.SOFIAX_CONFIG_FILE}", emit: sofiax_config

    script:
        """
        python3 -u /app/s2p_setup.py \
            ${params.S2P_TEMPLATE} \
            $image_cube_file \
            $sofia_parameter_file_template \
            ${params.RUN_NAME} \
            ${params.WORKDIR}/${params.RUN_NAME}
        """
}

// Another process for updating the sofiax config file database credentials
process credentials {
    container = params.WALLABY_COMPONENTS_IMAGE
    containerOptions = '--bind /mnt/shared:/mnt/shared'

    input:
        val sofiax_config

    output:
        val sofiax_config, emit: sofiax_config
        val file("${params.WORKDIR}/${params.RUN_NAME}/sofia_*.par"), emit: parameter_files
    
    script:
        """
        python3 /app/database_credentials.py \
            --config $sofiax_config \
            --host ${params.DATABASE_HOST} \
            --name ${params.DATABASE_NAME} \
            --username ${params.DATABASE_USER} \
            --password ${params.DATABASE_PASS}
        """
}

// Fetch parameter files from the filesystem (dynamically)
process get_parameter_files {
    executor = 'local'

    input:
        val sofiax_config

    output:
        val parameter_files, emit: parameter_files

    exec:
        parameter_files = file("${params.WORKDIR}/${params.RUN_NAME}/sofia_*.par")
}

// Run source finding application (sofia)
process sofia {
    container = params.SOFIA_IMAGE
    containerOptions = '--bind /mnt/shared:/mnt/shared'
    
    input:
        file parameter_file

    output:
        path parameter_file, emit: parameter_file

    script:
        """
        #!/bin/bash
        
        OMP_NUM_THREADS=8 sofia $parameter_file
        """
}

// Write sofia output to database (sofiax)
process sofiax {
    container = params.SOFIAX_IMAGE
    containerOptions = '--bind /mnt/shared:/mnt/shared'
    
    input:
        file parameter_file

    output:
        stdout emit: output

    script:
        """
        #!/bin/bash
        sofiax -c ${params.WORKDIR}/${params.RUN_NAME}/${params.SOFIAX_CONFIG_FILE} -p $parameter_file
        """
}

// ----------------------------------------------------------------------------------------
// Workflow
// ----------------------------------------------------------------------------------------

workflow source_finding {
    take: 
        cube
        sofia_parameter_file

    main:
        s2p_setup(cube, sofia_parameter_file)
        credentials(s2p_setup.out.sofiax_config)
        get_parameter_files(credentials.out.sofiax_config)
        sofia(get_parameter_files.out.parameter_files.flatten())
        sofiax(sofia.out.parameter_file)
}

// ----------------------------------------------------------------------------------------
