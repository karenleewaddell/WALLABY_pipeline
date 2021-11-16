"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[372],{3099:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=a(7462),i=a(3366),n=(a(7294),a(3905)),s=["components"],r={sidebar_position:1},p={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"The WALLABY survey science data post-processing generates advanced data products, that are used by scientists for their research. We have composed some of these data post-processing tasks into Nextflow pipelines for convenient execution, thereby abstracting the low-level computing details of these activities from the science users.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/WALLABY_workflows/docs/overview",editUrl:"https://github.com/AusSRC/WALLABY_workflows/docs/overview.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/WALLABY_workflows/docs/getting_started"}},d=[{value:"Modules",id:"modules",children:[{value:"Mosaicking",id:"mosaicking",children:[]},{value:"Source finding",id:"source-finding",children:[]}]}],l={toc:d};function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The WALLABY survey science data post-processing generates advanced data products, that are used by scientists for their research. We have composed some of these data post-processing tasks into ",(0,n.kt)("a",{parentName:"p",href:"https://www.nextflow.io/"},"Nextflow")," pipelines for convenient execution, thereby abstracting the low-level computing details of these activities from the science users."),(0,n.kt)("p",null,"Currently we provide support for two modules for the pipeline, which each produce an important advanced data product. These components are the following: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mosaicking of image footprints (taken directly from ASKAP), "),(0,n.kt)("li",{parentName:"ul"},"source finding to generate the detections for the WALLABY catalogue. ")),(0,n.kt)("p",null,"The WALLABY workflow is composed of two separate Nextflow modules for the two key functional components of the workflow. The end-to-end workflow takes raw footprints from ",(0,n.kt)("a",{parentName:"p",href:"https://data.csiro.au/collections/domain/casdaObservation/search/"},"CASDA's Data Access Portal"),", performs linear mosaicking with ",(0,n.kt)("a",{parentName:"p",href:"https://www.atnf.csiro.au/computing/software/askapsoft/sdp/docs/current/calim/linmos.html"},"linmos")," to generate a WALLABY image cube. We then run source finding with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SoFiA-Admin/SoFiA-2"},"SoFiA-2")," and write the output to a PostgreSQL database with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AusSRC/SoFiAX"},"SoFiAX"),". We provide the capability to run the two modules independently or together on a variety of computing resources."),(0,n.kt)("h2",{id:"modules"},"Modules"),(0,n.kt)("h3",{id:"mosaicking"},"Mosaicking"),(0,n.kt)("p",null,"The mosaicking module downloads raw image footprints from CASDA's ",(0,n.kt)("a",{parentName:"p",href:"https://data.csiro.au/collections/domain/casdaObservation/search/"},"Data Access Portal")," for SBIDs of the user's choosing, and runs the ",(0,n.kt)("inlineCode",{parentName:"p"},"linmos")," application to generate the mosaicked image cube advanced data product."),(0,n.kt)("p",null,"The individual processes of the workflow are executed sequentially, as they are dependent on the output of the previous process. The steps of the module are:"),(0,n.kt)("h5",{id:"1-download"},"1. Download"),(0,n.kt)("p",null,"Download data cube and weights from CASDA's ",(0,n.kt)("a",{parentName:"p",href:"https://data.csiro.au/collections/domain/casdaObservation/search/"},"Data Access Portal"),". Uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"casda_download.py")," script in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AusSRC/WALLABY_components"},"WALLABY components")," repository to query and download. This step requires users to have an ",(0,n.kt)("a",{parentName:"p",href:"https://opal.atnf.csiro.au/"},"OPAL")," account for programmatic access to the service. "),(0,n.kt)("p",null,"This step performs a download of the image cube and weights, both of which are required for the linear mosaicking application."),(0,n.kt)("h5",{id:"2-checksum"},"2. Checksum"),(0,n.kt)("p",null,"This step will verify that the image cubes and weights downloaded from CASDA are free from error. We calculate the checksum of the downloaded file with that expected."),(0,n.kt)("h5",{id:"3-generate-config"},"3. Generate config"),(0,n.kt)("p",null,"Create the ",(0,n.kt)("inlineCode",{parentName:"p"},"linmos")," configuration file from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AusSRC/WALLABY_components/blob/main/generate_linmos_config.py"},"template"),". It will replace the input image cube and weights with those downloaded as part of the workflow. The user specifies the filename and location of the temporary configuration file and ",(0,n.kt)("inlineCode",{parentName:"p"},"linmos")," mosaicked image cube output."),(0,n.kt)("h5",{id:"4-run-linmos"},"4. Run linmos"),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"linmos")," on the image cubes downloaded with the configuration file generated in the previous step."),(0,n.kt)("h3",{id:"source-finding"},"Source finding"),(0,n.kt)("h5",{id:"1-generate-sofia-parameters"},"1. Generate sofia parameters"),(0,n.kt)("p",null,"Generate the default ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia.par")," file based on user-provided configuration details. This step is just used to parameterise the ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia")," run."),(0,n.kt)("h5",{id:"2-s2p"},"2. s2p"),(0,n.kt)("p",null,"Based on scripts written by the SoFiA Admin to generate the ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"sofiax")," parameter/configuration files for a given data cube (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SoFiA-Admin/s2p_setup"},"repository"),")."),(0,n.kt)("p",null,"Will generate all of the ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia.par")," files and the ",(0,n.kt)("inlineCode",{parentName:"p"},"config.ini")," for the execution of both ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"sofiax"),". Will take a selected WALLABY data cube and automatically decide on the best sub-cube splitting arrangement for running on the AusSRC Slurm cluster."),(0,n.kt)("h5",{id:"3-database-credentials"},"3. Database credentials"),(0,n.kt)("p",null,"Update the ",(0,n.kt)("inlineCode",{parentName:"p"},"config.ini")," file with database credentials. This is required by ",(0,n.kt)("inlineCode",{parentName:"p"},"sofiax")," to write ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia")," outputs."),(0,n.kt)("h5",{id:"4-run-sofia"},"4. Run ",(0,n.kt)("inlineCode",{parentName:"h5"},"sofia")),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia")," on the entire data cube. "),(0,n.kt)("h5",{id:"5-run-sofiax"},"5. Run ",(0,n.kt)("inlineCode",{parentName:"h5"},"sofiax")),(0,n.kt)("p",null,"Write detections from ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia")," into a database by running ",(0,n.kt)("inlineCode",{parentName:"p"},"sofiax"),". SoFiAX will be run without executing ",(0,n.kt)("inlineCode",{parentName:"p"},"sofia"),"."))}c.isMDXComponent=!0}}]);