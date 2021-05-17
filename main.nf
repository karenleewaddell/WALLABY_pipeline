// ----------------------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------------------

workflow {
    params_ch = Channel.fromPath( './test_case/*.par' )
    conf = file( './test_case/config.ini' )

    main:
        sofia(params_ch, conf)
        sofiax(sofia.out.params, sofia.out.conf)
}

// ----------------------------------------------------------------------------------------