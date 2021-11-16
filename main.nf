#!/usr/bin/env nextflow

nextflow.enable.dsl = 2
include { mosaicking } from './mosaicking/main'
include { source_finding } from './source_finding/main'

workflow {
    files = Channel.of(params.IMAGE_CUBES.split(','))

    main:
        mosaicking(files)
        source_finding(mosaicking.out.cube)
}