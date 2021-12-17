#!/usr/bin/env nextflow

nextflow.enable.dsl = 2
include { download } from './download/main'
include { mosaicking } from './mosaicking/main'

workflow {
    sbids = Channel.of(params.SBIDS.replaceAll(',', ' '))

    main:
        download(sbids)
        mosaicking(download.out.footprints.collect(), download.out.weights.collect())
}
