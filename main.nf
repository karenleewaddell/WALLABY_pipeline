#!/usr/bin/env nextflow

nextflow.enable.dsl = 2
include { source_finding } from './source_finding/main'

workflow {
    image_cube = params.IMAGE_CUBE

    main: 
        source_finding(image_cube)  
}