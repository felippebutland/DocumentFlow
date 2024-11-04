function t(n){switch(n){case"view_1vynfg4":return`direction: down

Databases: {
  label: "Databases"

  MainDatabase: {
    label: "Main database"
    shape: cylinder
  }
}
`;case"index":return`direction: down

DocumentFlow: {
  label: "Envio de documentos"
}
Databases: {
  label: "Databases"
}
Customer: {
  label: "User"
  shape: person
}
`;case"view_e77d2t":return`direction: down

DocumentFlow: {
  label: "Envio de documentos"

  DocumentFlowApiGateway: {
    label: "documentFlowApiGateway"
  }
}
DatabasesMainDatabase: {
  label: "Main database"
  shape: cylinder
}
`;default:throw new Error("Unknown viewId: "+n)}}function e(n){switch(n){case"view_1vynfg4":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        forcelabels=true,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        nojustify=true,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        nojustify=true,
        penwidth=2
    ];
    subgraph cluster_databases {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DATABASES</B></FONT>>,
            likec4_depth=1,
            likec4_id=databases,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        maindatabase [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Main database</FONT></TD><TD ROWSPAN="2" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Monolith database</FONT></TD></TR></TABLE>>,
            likec4_id="databases.mainDatabase",
            likec4_level=1,
            margin="0.139,0",
            penwidth=2,
            shape=cylinder];
    }
}
`;case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        forcelabels=true,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        nojustify=true,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        nojustify=true,
        penwidth=2
    ];
    documentflow [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<FONT POINT-SIZE="19">Envio de documentos</FONT>>,
        likec4_id=documentFlow,
        likec4_level=0,
        margin="0.362,0.362"];
    databases [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Databases</FONT></TD><TD WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR></TABLE>>,
        likec4_id=databases,
        likec4_level=0,
        margin="0.139,0.362"];
    documentflow -> databases [style=invis];
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Final user</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    databases -> customer [style=invis];
}
`;case"view_e77d2t":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        forcelabels=true,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pack=120,
        packmode=array_3,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [fontname=Arial,
        height=2.5,
        label="\\N",
        nojustify=true,
        penwidth=0,
        shape=rect,
        style=filled,
        width=4.445
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        nojustify=true,
        penwidth=2
    ];
    subgraph cluster_documentflow {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ENVIO DE DOCUMENTOS</B></FONT>>,
            likec4_depth=1,
            likec4_id=documentFlow,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        documentflowapigateway [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">documentFlowApiGateway</FONT></TD><TD ROWSPAN="3" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">NestJs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">APi Gateway document flow</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.documentFlowApiGateway",
            likec4_level=1,
            margin="0.139,0.362"];
    }
    maindatabase [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Main database</FONT></TD><TD ROWSPAN="2" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Monolith database</FONT></TD></TR></TABLE>>,
        likec4_id="databases.mainDatabase",
        likec4_level=0,
        margin="0.139,0",
        penwidth=2,
        shape=cylinder];
    maindatabase -> documentflowapigateway [style=invis];
}
`;default:throw new Error("Unknown viewId: "+n)}}function a(n){switch(n){case"view_1vynfg4":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="311pt"
 viewBox="0.00 0.00 430.10 311.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 296.25)">
<g id="clust1" class="cluster">
<title>cluster_databases</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 392,-273.2 392,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DATABASES</text>
</g>
<!-- maindatabase -->
<g id="node1" class="node">
<title>maindatabase</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M360.02,-203.64C360.02,-212.67 288.3,-220 200,-220 111.7,-220 39.98,-212.67 39.98,-203.64 39.98,-203.64 39.98,-56.36 39.98,-56.36 39.98,-47.33 111.7,-40 200,-40 288.3,-40 360.02,-47.33 360.02,-56.36 360.02,-56.36 360.02,-203.64 360.02,-203.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M360.02,-203.64C360.02,-194.61 288.3,-187.27 200,-187.27 111.7,-187.27 39.98,-194.61 39.98,-203.64"/>
<text text-anchor="start" x="122.06" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="168" y="-134.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Main database</text>
<text text-anchor="start" x="304.06" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="168" y="-111.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Monolith database</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="810pt"
 viewBox="0.00 0.00 350.14 810.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- documentflow -->
<g id="node1" class="node">
<title>documentflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text text-anchor="start" x="68.66" y="-684.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Envio de documentos</text>
</g>
<!-- databases -->
<g id="node2" class="node">
<title>databases</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text text-anchor="start" x="98.66" y="-385.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="144.6" y="-384.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Databases</text>
<text text-anchor="start" x="247.49" y="-385.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
</g>
<!-- customer -->
<g id="node3" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="139.96" y="-95.7" font-family="Arial" font-size="19.00" fill="#eff6ff">User</text>
<text text-anchor="start" x="129.29" y="-71.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Final user</text>
</g>
<!-- documentflow&#45;&gt;databases -->
<!-- databases&#45;&gt;customer -->
</g>
</svg>
`;case"view_e77d2t":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="472pt" height="550pt"
 viewBox="0.00 0.00 472.10 550.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 535.05)">
<g id="clust1" class="cluster">
<title>cluster_documentflow</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 434,-273.2 434,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ENVIO DE DOCUMENTOS</text>
</g>
<!-- documentflowapigateway -->
<g id="node1" class="node">
<title>documentflowapigateway</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="401.51,-220 40.49,-220 40.49,-40 401.51,-40 401.51,-220"/>
<text text-anchor="start" x="92.56" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="138.5" y="-144.9" font-family="Arial" font-size="19.00" fill="#eff6ff">documentFlowApiGateway</text>
<text text-anchor="start" x="375.56" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="138.5" y="-123.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">NestJs</text>
<text text-anchor="start" x="138.5" y="-101.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">APi Gateway document flow</text>
</g>
<!-- maindatabase -->
<g id="node2" class="node">
<title>maindatabase</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M381.02,-503.64C381.02,-512.67 309.3,-520 221,-520 132.7,-520 60.98,-512.67 60.98,-503.64 60.98,-503.64 60.98,-356.36 60.98,-356.36 60.98,-347.33 132.7,-340 221,-340 309.3,-340 381.02,-347.33 381.02,-356.36 381.02,-356.36 381.02,-503.64 381.02,-503.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M381.02,-503.64C381.02,-494.61 309.3,-487.27 221,-487.27 132.7,-487.27 60.98,-494.61 60.98,-503.64"/>
<text text-anchor="start" x="143.06" y="-425.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="189" y="-434.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Main database</text>
<text text-anchor="start" x="325.06" y="-425.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="189" y="-411.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Monolith database</text>
</g>
<!-- maindatabase&#45;&gt;documentflowapigateway -->
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+n)}}function o(n){switch(n){case"view_1vynfg4":return`---
title: "Databases"
---
graph TB
  subgraph Databases["Databases"]
    Databases.MainDatabase[(Main database)]
  end
`;case"index":return`---
title: "Landscape view"
---
graph TB
  DocumentFlow[Envio de documentos]
  Databases[Databases]
  Customer[fa:fa-user User]
`;case"view_e77d2t":return`---
title: "Envio de documentos"
---
graph TB
  subgraph DocumentFlow["Envio de documentos"]
    DocumentFlow.DocumentFlowApiGateway[documentFlowApiGateway]
  end
  DatabasesMainDatabase[(Main database)]
`;default:throw new Error("Unknown viewId: "+n)}}export{t as d2Source,e as dotSource,o as mmdSource,a as svgSource};
