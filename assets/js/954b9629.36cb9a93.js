(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[972],{4935:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:2},d={unversionedId:"configuration/mosaicking",id:"configuration/mosaicking",isDocsHomePage:!1,title:"Mosaicking",description:"The mosaicking workflow will download footprints from CASDA, generate the linmos configuration and run linmos. The output file will be stored on the AusSRC shared file system.",source:"@site/docs/configuration/mosaicking.md",sourceDirName:"configuration",slug:"/configuration/mosaicking",permalink:"/WALLABY_workflows/docs/configuration/mosaicking",editUrl:"https://github.com/AusSRC/WALLABY_workflows/docs/configuration/mosaicking.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"End-to-end",permalink:"/WALLABY_workflows/docs/configuration/end-to-end"},next:{title:"Source finding",permalink:"/WALLABY_workflows/docs/configuration/source-finding"}},m=[{value:"Parameters",id:"parameters",children:[{value:"Environment",id:"environment",children:[]},{value:"CASDA Download",id:"casda-download",children:[]},{value:"Linmos",id:"linmos",children:[]}]}],p={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The mosaicking workflow will download footprints from CASDA, generate the linmos configuration and run linmos. The output file will be stored on the AusSRC shared file system."),(0,i.kt)("p",null,"The output filename is given by the ",(0,i.kt)("inlineCode",{parentName:"p"},"LINMOS_OUTPUT_IMAGE_CUBE")," and the output path is given by the ",(0,i.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"We use \u2757 to indicate that a parameter is required and no default value is provided (the user will need to provide this on execution of the workflow). The parameter is otherwise optional."),(0,i.kt)("h3",{id:"environment"},"Environment"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WORKDIR"),"\u2757"),(0,i.kt)("td",{parentName:"tr",align:null},"Working directory in the AusSRC shared file system to store all temporary files. This should start with ",(0,i.kt)("inlineCode",{parentName:"td"},"/mnt/shared/home/")," followed by your username, or in the WALLABY shared space ",(0,i.kt)("inlineCode",{parentName:"td"},"/mnt/shared/wallaby/")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"/mnt/shared/wallaby/nextflow_runs/"))))),(0,i.kt)("h3",{id:"casda-download"},"CASDA Download"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SBIDS"),"\u2757"),(0,i.kt)("td",{parentName:"tr",align:null},"The scheduling block IDs for the footprints of interest"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CASDA_USERNAME"),"\u2757"),(0,i.kt)("td",{parentName:"tr",align:null},"Username for ",(0,i.kt)("a",{parentName:"td",href:"https://opal.atnf.csiro.au/"},"OPAL")," account that is required to programatically access the ",(0,i.kt)("a",{parentName:"td",href:"https://data.csiro.au/collections/domain/casdaObservation/search/"},"CASDA Data Access Portal")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CASDA_PASSWORD"),"\u2757"),(0,i.kt)("td",{parentName:"tr",align:null},"Password for the ",(0,i.kt)("a",{parentName:"td",href:"https://opal.atnf.csiro.au/"},"OPAL")," account"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CASDA_CUBE_TYPE")),(0,i.kt)("td",{parentName:"tr",align:null},"Cube type in the CASDA Portal search query"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cube"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CASDA_CUBE_FILENAME")),(0,i.kt)("td",{parentName:"tr",align:null},"Cube filename in the search query."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"image.restored.%SB$SBID%.cube.MilkyWay.contsub.fits"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CASDA_WEIGHTS_TYPE")),(0,i.kt)("td",{parentName:"tr",align:null},"Cube weight type in the CASDA portal search query"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cube"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CASDA_WEIGHTS_FILENAME")),(0,i.kt)("td",{parentName:"tr",align:null},"Cube filename in the search query."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"weights%SB$SBID%.cube.MilkyWay.fits"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Query notes"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%")," is a wildcard"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$SBID")," will be replaced with the string values from ",(0,i.kt)("inlineCode",{parentName:"li"},"SBIDS"))),(0,i.kt)("h3",{id:"linmos"},"Linmos"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LINMOS_OUTPUT_IMAGE_CUBE")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the mosaicked output image cube"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mosaicked"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LINMOS_CONFIG_FILENAME ")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the temporary ",(0,i.kt)("inlineCode",{parentName:"td"},"linmos")," configuration file"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"linmos.config"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LINMOS_CLUSTER_OPTIONS")),(0,i.kt)("td",{parentName:"tr",align:null},"Cluster options for the execution of ",(0,i.kt)("inlineCode",{parentName:"td"},"linmos")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--ntasks=324 --ntasks-per-node=18"))))))}u.isMDXComponent=!0}}]);