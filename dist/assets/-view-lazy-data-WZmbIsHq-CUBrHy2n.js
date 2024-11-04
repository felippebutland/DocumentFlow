function t(n){switch(n){case"view_1vynfg4":return`direction: down

DocumentFlow: {
  label: "Envio de documentos"
}
Databases: {
  label: "Databases"

  MainDatabase: {
    label: "Main database"
    shape: cylinder
  }
}

DocumentFlow -> Databases.MainDatabase: "access main database"
`;case"index":return`direction: down

Customer: {
  label: "User"
  shape: person
}
DocumentFlow: {
  label: "Envio de documentos"
}
Databases: {
  label: "Databases"
}

Customer -> DocumentFlow: "User accesses API Gateway"
DocumentFlow -> Databases: "access main database"
`;case"view_e77d2t":return`direction: down

Customer: {
  label: "User"
  shape: person
}
DocumentFlow: {
  label: "Envio de documentos"

  MqNotification: {
    label: "Mq Notification"
    shape: queue
  }
  MqSignUp: {
    label: "Mq SignUp"
    shape: queue
  }
  MqLogin: {
    label: "Mq Login"
    shape: queue
  }
  DocumentFlowApiGateway: {
    label: "documentFlowApiGateway"
  }
  LoginMs: {
    label: "loginMs"
  }
  SignUpMs: {
    label: "signUpMs"
  }
  NotificationMs: {
    label: "notificationMs"
  }
  DocumentMs: {
    label: "documentMs"
  }
}
DatabasesMainDatabase: {
  label: "Main database"
  shape: cylinder
}

Customer -> DocumentFlow.DocumentFlowApiGateway: "User accesses API Gateway"
DocumentFlow.DocumentFlowApiGateway -> DocumentFlow.DocumentMs: "Backend uses documentMs"
DocumentFlow.DocumentFlowApiGateway -> DocumentFlow.NotificationMs: "Backend uses notificationMs"
DocumentFlow.DocumentFlowApiGateway -> DocumentFlow.SignUpMs: "Backend uses signUpMs"
DocumentFlow.DocumentFlowApiGateway -> DocumentFlow.LoginMs: "Backend uses loginMs"
DocumentFlow.LoginMs -> DatabasesMainDatabase: "access main database"
DocumentFlow.SignUpMs -> DatabasesMainDatabase: "access main database"
DocumentFlow.NotificationMs -> DatabasesMainDatabase: "access main database"
DocumentFlow.DocumentMs -> DatabasesMainDatabase: "access main database"
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
    documentflow [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<FONT POINT-SIZE="19">Envio de documentos</FONT>>,
        likec4_id=documentFlow,
        likec4_level=0,
        margin="0.362,0.362"];
    documentflow -> maindatabase [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">access main database</FONT></TD></TR></TABLE>>,
        likec4_id="documentFlow:databases.mainDatabase",
        style=solid,
        weight=1];
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
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Final user</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    documentflow [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<FONT POINT-SIZE="19">Envio de documentos</FONT>>,
        likec4_id=documentFlow,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> documentflow [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">User accesses API Gateway</FONT></TD></TR></TABLE>>,
        likec4_id="customer:documentFlow",
        minlen=1,
        style=dotted,
        weight=2];
    databases [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Databases</FONT></TD><TD WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR></TABLE>>,
        likec4_id=databases,
        likec4_level=0,
        margin="0.139,0.362"];
    documentflow -> databases [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">access main database</FONT></TD></TR></TABLE>>,
        likec4_id="documentFlow:databases",
        minlen=1,
        style=solid,
        weight=2];
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
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            mqnotification [color="#2563eb",
                fillcolor="#3b82f6",
                fontcolor="#eff6ff",
                height=2.292,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mq Notification</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">kafka</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">MQ para Notification</FONT></TD></TR></TABLE>>,
                likec4_id="documentFlow.mqNotification",
                likec4_level=1,
                margin="0.417,0.362"];
            mqsignup [color="#2563eb",
                fillcolor="#3b82f6",
                fontcolor="#eff6ff",
                height=2.292,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mq SignUp</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">kafka</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">MQ para SignUp</FONT></TD></TR></TABLE>>,
                likec4_id="documentFlow.mqSignUp",
                likec4_level=1,
                margin="0.417,0.362"];
        }
        mqlogin [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            height=2.292,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">Mq Login</FONT></TD></TR><TR><TD><FONT POINT-SIZE="12" COLOR="#bfdbfe">kafka</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">MQ para Login</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.mqLogin",
            likec4_level=1,
            margin="0.417,0.362"];
        mqnotification -> mqlogin [style=invis];
        documentflowapigateway [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=documentFlow,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">documentFlowApiGateway</FONT></TD><TD ROWSPAN="3" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">NestJs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">APi Gateway document flow</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.documentFlowApiGateway",
            likec4_level=1,
            margin="0.139,0.362"];
        loginms [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=documentFlow,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">loginMs</FONT></TD><TD ROWSPAN="3" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Nestjs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Microserviço responsável por login</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.loginMs",
            likec4_level=1,
            margin="0.139,0.362"];
        documentflowapigateway -> loginms [arrowhead=vee,
            color="#3b82f6",
            fontcolor="#60a5fa",
            label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Backend uses loginMs</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.documentFlowApiGateway:documentFlow.loginMs",
            style=dashed,
            weight=6];
        signupms [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=documentFlow,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">signUpMs</FONT></TD><TD ROWSPAN="3" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Nestjs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Microserviço responsável por<BR/>criação de conta</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.signUpMs",
            likec4_level=1,
            margin="0.139,0.362"];
        documentflowapigateway -> signupms [arrowhead=vee,
            color="#3b82f6",
            fontcolor="#60a5fa",
            label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Backend uses signUpMs</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.documentFlowApiGateway:documentFlow.signUpMs",
            style=dashed,
            weight=6];
        notificationms [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=documentFlow,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">notificationMs</FONT></TD><TD ROWSPAN="3" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Nestjs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Microserviço responsável por<BR/>notificação</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.notificationMs",
            likec4_level=1,
            margin="0.139,0.362"];
        documentflowapigateway -> notificationms [arrowhead=vee,
            color="#3b82f6",
            fontcolor="#60a5fa",
            label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Backend uses notificationMs</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.documentFlowApiGateway:documentFlow.notificationMs",
            style=dashed,
            weight=6];
        documentms [color="#2563eb",
            fillcolor="#3b82f6",
            fontcolor="#eff6ff",
            group=documentFlow,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="3" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">documentMs</FONT></TD><TD ROWSPAN="3" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12" COLOR="#bfdbfe">Nestjs</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Microserviço responsável pelos<BR/>documentos</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.documentMs",
            likec4_level=1,
            margin="0.139,0.362"];
        documentflowapigateway -> documentms [arrowhead=vee,
            color="#3b82f6",
            fontcolor="#60a5fa",
            label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Backend uses documentMs</FONT></TD></TR></TABLE>>,
            likec4_id="documentFlow.documentFlowApiGateway:documentFlow.documentMs",
            style=dashed,
            weight=6];
    }
    customer [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD><FONT POINT-SIZE="19">User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="14" COLOR="#bfdbfe">Final user</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.362,0.362"];
    customer -> documentflowapigateway [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">User accesses API Gateway</FONT></TD></TR></TABLE>>,
        likec4_id="customer:documentFlow.documentFlowApiGateway",
        minlen=1,
        style=dotted,
        weight=5];
    maindatabase [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="6"><TR><TD ROWSPAN="2" WIDTH="76" FIXEDSIZE="TRUE"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">Main database</FONT></TD><TD ROWSPAN="2" WIDTH="16" FIXEDSIZE="TRUE"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Monolith database</FONT></TD></TR></TABLE>>,
        likec4_id="databases.mainDatabase",
        likec4_level=0,
        margin="0.139,0",
        penwidth=2,
        shape=cylinder];
    loginms -> maindatabase [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">access main database</FONT></TD></TR></TABLE>>,
        likec4_id="documentFlow.loginMs:databases.mainDatabase",
        style=solid,
        weight=5];
    signupms -> maindatabase [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">access main database</FONT></TD></TR></TABLE>>,
        likec4_id="documentFlow.signUpMs:databases.mainDatabase",
        style=solid,
        weight=5];
    notificationms -> maindatabase [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">access main database</FONT></TD></TR></TABLE>>,
        likec4_id="documentFlow.notificationMs:databases.mainDatabase",
        style=solid,
        weight=5];
    documentms -> maindatabase [arrowhead=vee,
        color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">access main database</FONT></TD></TR></TABLE>>,
        likec4_id="documentFlow.documentMs:databases.mainDatabase",
        style=solid,
        weight=5];
}
`;default:throw new Error("Unknown viewId: "+n)}}function o(n){switch(n){case"view_1vynfg4":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="574pt"
 viewBox="0.00 0.00 430.10 574.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 559.05)">
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
<!-- documentflow -->
<g id="node2" class="node">
<title>documentflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-544 39.98,-544 39.98,-364 360.02,-364 360.02,-544"/>
<text text-anchor="start" x="108.64" y="-448.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Envio de documentos</text>
</g>
<!-- documentflow&#45;&gt;maindatabase -->
<g id="edge1" class="edge">
<title>documentflow&#45;&gt;maindatabase</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M200,-364.16C200,-322.8 200,-273.42 200,-230.78"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="200,-223.39 203.38,-230.89 200.5,-224.7 200.5,-230.89 200,-230.89 199.5,-230.89 199.5,-224.7 196.63,-230.89 200,-223.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-281.2 200,-304 345.3,-304 345.3,-281.2 200,-281.2"/>
<text text-anchor="start" x="203" y="-288.4" font-family="Arial" font-size="14.00" fill="#60a5fa">access main database</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="374pt" height="856pt"
 viewBox="0.00 0.00 373.52 855.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-825.6 0,-825.6 0,-645.6 320.04,-645.6 320.04,-825.6"/>
<text text-anchor="start" x="139.96" y="-741.3" font-family="Arial" font-size="19.00" fill="#eff6ff">User</text>
<text text-anchor="start" x="129.29" y="-717" font-family="Arial" font-size="14.00" fill="#bfdbfe">Final user</text>
</g>
<!-- documentflow -->
<g id="node2" class="node">
<title>documentflow</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text text-anchor="start" x="68.66" y="-407.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Envio de documentos</text>
</g>
<!-- databases -->
<g id="node3" class="node">
<title>databases</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="98.66" y="-85.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="144.6" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Databases</text>
<text text-anchor="start" x="247.49" y="-85.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
</g>
<!-- customer&#45;&gt;documentflow -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;documentflow</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="1,5" d="M160.02,-645.67C160.02,-604.29 160.02,-554.95 160.02,-512.43"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="160.02,-505.07 163.4,-512.57 160.52,-506.38 160.52,-512.57 160.02,-512.57 159.52,-512.57 159.52,-506.38 156.65,-512.57 160.02,-505.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-562.8 160.02,-585.6 343.42,-585.6 343.42,-562.8 160.02,-562.8"/>
<text text-anchor="start" x="163.02" y="-570" font-family="Arial" font-size="14.00" fill="#60a5fa">User accesses API Gateway</text>
</g>
<!-- documentflow&#45;&gt;databases -->
<g id="edge2" class="edge">
<title>documentflow&#45;&gt;databases</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M160.02,-322.87C160.02,-281.49 160.02,-232.15 160.02,-189.63"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="160.02,-182.27 163.4,-189.77 160.52,-183.58 160.52,-189.77 160.02,-189.77 159.52,-189.77 159.52,-183.58 156.65,-189.77 160.02,-182.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-240 160.02,-262.8 305.32,-262.8 305.32,-240 160.02,-240"/>
<text text-anchor="start" x="163.02" y="-247.2" font-family="Arial" font-size="14.00" fill="#60a5fa">access main database</text>
</g>
</g>
</svg>
`;case"view_e77d2t":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="2210pt" height="1188pt"
 viewBox="0.00 0.00 2210.10 1187.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1172.65)">
<g id="clust1" class="cluster">
<title>cluster_documentflow</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-886.8 2172,-886.8 2172,-282.8 8,-282.8"/>
<text text-anchor="start" x="16" y="-873.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ENVIO DE DOCUMENTOS</text>
</g>
<!-- mqnotification -->
<g id="node1" class="node">
<title>mqnotification</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-818.11 47.98,-818.11 47.98,-653.09 368.02,-653.09 368.02,-818.11"/>
<text text-anchor="start" x="145.17" y="-751.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Mq Notification</text>
<text text-anchor="start" x="193.66" y="-729" font-family="Arial" font-size="12.00" fill="#bfdbfe">kafka</text>
<text text-anchor="start" x="144.2" y="-706.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">MQ para Notification</text>
</g>
<!-- mqsignup -->
<g id="node2" class="node">
<title>mqsignup</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="928.02,-818.11 607.98,-818.11 607.98,-653.09 928.02,-653.09 928.02,-818.11"/>
<text text-anchor="start" x="721.01" y="-751.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Mq SignUp</text>
<text text-anchor="start" x="753.66" y="-729" font-family="Arial" font-size="12.00" fill="#bfdbfe">kafka</text>
<text text-anchor="start" x="715.87" y="-706.8" font-family="Arial" font-size="14.00" fill="#bfdbfe">MQ para SignUp</text>
</g>
<!-- mqlogin -->
<g id="node3" class="node">
<title>mqlogin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-495.31 47.98,-495.31 47.98,-330.29 368.02,-330.29 368.02,-495.31"/>
<text text-anchor="start" x="168.92" y="-428.7" font-family="Arial" font-size="19.00" fill="#eff6ff">Mq Login</text>
<text text-anchor="start" x="193.66" y="-406.2" font-family="Arial" font-size="12.00" fill="#bfdbfe">kafka</text>
<text text-anchor="start" x="161.7" y="-384" font-family="Arial" font-size="14.00" fill="#bfdbfe">MQ para Login</text>
</g>
<!-- documentflowapigateway -->
<g id="node4" class="node">
<title>documentflowapigateway</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1542.51,-825.6 1181.49,-825.6 1181.49,-645.6 1542.51,-645.6 1542.51,-825.6"/>
<text text-anchor="start" x="1233.56" y="-731.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1279.5" y="-750.5" font-family="Arial" font-size="19.00" fill="#eff6ff">documentFlowApiGateway</text>
<text text-anchor="start" x="1516.56" y="-731.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1279.5" y="-728.8" font-family="Arial" font-size="12.00" fill="#bfdbfe">NestJs</text>
<text text-anchor="start" x="1279.5" y="-707" font-family="Arial" font-size="14.00" fill="#bfdbfe">APi Gateway document flow</text>
</g>
<!-- loginms -->
<g id="node5" class="node">
<title>loginms</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="830.01,-502.8 477.99,-502.8 477.99,-322.8 830.01,-322.8 830.01,-502.8"/>
<text text-anchor="start" x="530.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="576" y="-427.7" font-family="Arial" font-size="19.00" fill="#eff6ff">loginMs</text>
<text text-anchor="start" x="804.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="576" y="-406" font-family="Arial" font-size="12.00" fill="#bfdbfe">Nestjs</text>
<text text-anchor="start" x="576" y="-384.2" font-family="Arial" font-size="14.00" fill="#bfdbfe">Microserviço responsável por login</text>
</g>
<!-- signupms -->
<g id="node6" class="node">
<title>signupms</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1260.02,-502.8 939.98,-502.8 939.98,-322.8 1260.02,-322.8 1260.02,-502.8"/>
<text text-anchor="start" x="993.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1039" y="-436.2" font-family="Arial" font-size="19.00" fill="#eff6ff">signUpMs</text>
<text text-anchor="start" x="1233.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1039" y="-414.5" font-family="Arial" font-size="12.00" fill="#bfdbfe">Nestjs</text>
<text text-anchor="start" x="1039" y="-392.7" font-family="Arial" font-size="14.00" fill="#bfdbfe">Microserviço responsável por</text>
<text text-anchor="start" x="1039" y="-375.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">criação de conta</text>
</g>
<!-- notificationms -->
<g id="node7" class="node">
<title>notificationms</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1690.02,-502.8 1369.98,-502.8 1369.98,-322.8 1690.02,-322.8 1690.02,-502.8"/>
<text text-anchor="start" x="1423.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1469" y="-436.2" font-family="Arial" font-size="19.00" fill="#eff6ff">notificationMs</text>
<text text-anchor="start" x="1663.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1469" y="-414.5" font-family="Arial" font-size="12.00" fill="#bfdbfe">Nestjs</text>
<text text-anchor="start" x="1469" y="-392.7" font-family="Arial" font-size="14.00" fill="#bfdbfe">Microserviço responsável por</text>
<text text-anchor="start" x="1469" y="-375.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">notificação</text>
</g>
<!-- documentms -->
<g id="node8" class="node">
<title>documentms</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2132.01,-502.8 1799.99,-502.8 1799.99,-322.8 2132.01,-322.8 2132.01,-502.8"/>
<text text-anchor="start" x="1852.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1898" y="-436.2" font-family="Arial" font-size="19.00" fill="#eff6ff">documentMs</text>
<text text-anchor="start" x="2106.06" y="-408.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1898" y="-414.5" font-family="Arial" font-size="12.00" fill="#bfdbfe">Nestjs</text>
<text text-anchor="start" x="1898" y="-392.7" font-family="Arial" font-size="14.00" fill="#bfdbfe">Microserviço responsável pelos</text>
<text text-anchor="start" x="1898" y="-375.9" font-family="Arial" font-size="14.00" fill="#bfdbfe">documentos</text>
</g>
<!-- customer -->
<g id="node9" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1522.02,-1157.6 1201.98,-1157.6 1201.98,-977.6 1522.02,-977.6 1522.02,-1157.6"/>
<text text-anchor="start" x="1341.94" y="-1073.3" font-family="Arial" font-size="19.00" fill="#eff6ff">User</text>
<text text-anchor="start" x="1331.27" y="-1049" font-family="Arial" font-size="14.00" fill="#bfdbfe">Final user</text>
</g>
<!-- maindatabase -->
<g id="node10" class="node">
<title>maindatabase</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1474.02,-163.64C1474.02,-172.67 1402.3,-180 1314,-180 1225.7,-180 1153.98,-172.67 1153.98,-163.64 1153.98,-163.64 1153.98,-16.36 1153.98,-16.36 1153.98,-7.33 1225.7,0 1314,0 1402.3,0 1474.02,-7.33 1474.02,-16.36 1474.02,-16.36 1474.02,-163.64 1474.02,-163.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1474.02,-163.64C1474.02,-154.61 1402.3,-147.27 1314,-147.27 1225.7,-147.27 1153.98,-154.61 1153.98,-163.64"/>
<text text-anchor="start" x="1236.06" y="-85.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1282" y="-94.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Main database</text>
<text text-anchor="start" x="1418.06" y="-85.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="1282" y="-71.4" font-family="Arial" font-size="14.00" fill="#bfdbfe">Monolith database</text>
</g>
<!-- mqnotification&#45;&gt;mqlogin -->
<!-- documentflowapigateway&#45;&gt;loginms -->
<g id="edge2" class="edge">
<title>documentflowapigateway&#45;&gt;loginms</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M1181.51,-652.82C1076.51,-605.24 944.45,-545.4 838.73,-497.5"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="832.1,-494.5 840.32,-494.52 833.5,-494.58 839.13,-497.14 838.93,-497.59 838.72,-498.05 833.09,-495.49 837.53,-500.67 832.1,-494.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1029.23,-562.8 1029.23,-585.6 1175.3,-585.6 1175.3,-562.8 1029.23,-562.8"/>
<text text-anchor="start" x="1032.23" y="-570" font-family="Arial" font-size="14.00" fill="#60a5fa">Backend uses loginMs</text>
</g>
<!-- documentflowapigateway&#45;&gt;signupms -->
<g id="edge3" class="edge">
<title>documentflowapigateway&#45;&gt;signupms</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M1289.37,-645.67C1255.01,-603.6 1213.92,-553.28 1178.8,-510.29"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1174.09,-504.52 1181.45,-508.19 1175.31,-505.22 1179.22,-510.01 1178.83,-510.33 1178.45,-510.64 1174.53,-505.85 1176.22,-512.46 1174.09,-504.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1238.86,-562.8 1238.86,-585.6 1398.93,-585.6 1398.93,-562.8 1238.86,-562.8"/>
<text text-anchor="start" x="1241.86" y="-570" font-family="Arial" font-size="14.00" fill="#60a5fa">Backend uses signUpMs</text>
</g>
<!-- documentflowapigateway&#45;&gt;notificationms -->
<g id="edge4" class="edge">
<title>documentflowapigateway&#45;&gt;notificationms</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M1408.57,-645.67C1430.42,-603.94 1456.52,-554.11 1478.91,-511.36"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1482.35,-504.79 1481.86,-513 1482.18,-506.18 1479.31,-511.66 1478.87,-511.43 1478.43,-511.2 1481.3,-505.72 1475.88,-509.87 1482.35,-504.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1451.04,-562.8 1451.04,-585.6 1634.46,-585.6 1634.46,-562.8 1451.04,-562.8"/>
<text text-anchor="start" x="1454.04" y="-570" font-family="Arial" font-size="14.00" fill="#60a5fa">Backend uses notificationMs</text>
</g>
<!-- documentflowapigateway&#45;&gt;documentms -->
<g id="edge5" class="edge">
<title>documentflowapigateway&#45;&gt;documentms</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M1542.21,-646.64C1581.55,-626.93 1622.83,-605.85 1661,-585.6 1707.5,-560.94 1757.45,-533.3 1803.19,-507.52"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1809.55,-503.93 1804.68,-510.55 1808.66,-505.01 1803.27,-508.05 1803.02,-507.61 1802.78,-507.18 1808.16,-504.14 1801.36,-504.67 1809.55,-503.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1702.94,-562.8 1702.94,-585.6 1880.92,-585.6 1880.92,-562.8 1702.94,-562.8"/>
<text text-anchor="start" x="1705.94" y="-570" font-family="Arial" font-size="14.00" fill="#60a5fa">Backend uses documentMs</text>
</g>
<!-- loginms&#45;&gt;maindatabase -->
<g id="edge7" class="edge">
<title>loginms&#45;&gt;maindatabase</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M808.93,-322.81C834.16,-309.03 860.16,-295.26 885,-282.8 969.09,-240.63 1064.46,-197.53 1143.89,-162.91"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1150.77,-159.91 1145.24,-166 1149.76,-160.89 1144.09,-163.36 1143.89,-162.91 1143.69,-162.45 1149.37,-159.98 1142.54,-159.81 1150.77,-159.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="965.86,-240 965.86,-262.8 1111.17,-262.8 1111.17,-240 965.86,-240"/>
<text text-anchor="start" x="968.86" y="-247.2" font-family="Arial" font-size="14.00" fill="#60a5fa">access main database</text>
</g>
<!-- signupms&#45;&gt;maindatabase -->
<g id="edge8" class="edge">
<title>signupms&#45;&gt;maindatabase</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1152.1,-323.05C1168.47,-296.07 1186.91,-266.55 1204.7,-240 1216,-223.13 1228.39,-205.49 1240.65,-188.49"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1244.84,-182.71 1243.18,-190.76 1244.48,-184.06 1240.85,-189.07 1240.44,-188.78 1240.04,-188.49 1243.67,-183.48 1237.71,-186.8 1244.84,-182.71"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1204.7,-240 1204.7,-262.8 1350,-262.8 1350,-240 1204.7,-240"/>
<text text-anchor="start" x="1207.7" y="-247.2" font-family="Arial" font-size="14.00" fill="#60a5fa">access main database</text>
</g>
<!-- notificationms&#45;&gt;maindatabase -->
<g id="edge9" class="edge">
<title>notificationms&#45;&gt;maindatabase</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1470.12,-322.87C1442.14,-281.32 1408.76,-231.73 1380.05,-189.1"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1375.92,-182.96 1382.91,-187.3 1377.07,-183.77 1380.53,-188.91 1380.11,-189.19 1379.7,-189.47 1376.24,-184.33 1377.31,-191.07 1375.92,-182.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1428.48,-240 1428.48,-262.8 1573.78,-262.8 1573.78,-240 1428.48,-240"/>
<text text-anchor="start" x="1431.48" y="-247.2" font-family="Arial" font-size="14.00" fill="#60a5fa">access main database</text>
</g>
<!-- documentms&#45;&gt;maindatabase -->
<g id="edge10" class="edge">
<title>documentms&#45;&gt;maindatabase</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" d="M1818.94,-322.96C1794.5,-309.06 1769.22,-295.21 1745,-282.8 1660.34,-239.42 1563.79,-195.93 1483.56,-161.35"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1477.09,-158.57 1485.32,-158.43 1478.5,-158.63 1484.18,-161.07 1483.98,-161.53 1483.79,-161.99 1478.1,-159.54 1482.65,-164.63 1477.09,-158.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1699.26,-240 1699.26,-262.8 1844.56,-262.8 1844.56,-240 1699.26,-240"/>
<text text-anchor="start" x="1702.26" y="-247.2" font-family="Arial" font-size="14.00" fill="#60a5fa">access main database</text>
</g>
<!-- customer&#45;&gt;documentflowapigateway -->
<g id="edge6" class="edge">
<title>customer&#45;&gt;documentflowapigateway</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="1,5" d="M1362,-977.73C1362,-933.71 1362,-880.44 1362,-835.17"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="1362,-827.78 1365.38,-835.28 1362.5,-829.09 1362.5,-835.28 1362,-835.28 1361.5,-835.28 1361.5,-829.09 1358.63,-835.28 1362,-827.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1362,-894.8 1362,-917.6 1545.4,-917.6 1545.4,-894.8 1362,-894.8"/>
<text text-anchor="start" x="1365" y="-902" font-family="Arial" font-size="14.00" fill="#60a5fa">User accesses API Gateway</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+n)}}function a(n){switch(n){case"view_1vynfg4":return`---
title: "Databases"
---
graph TB
  DocumentFlow[Envio de documentos]
  subgraph Databases["Databases"]
    Databases.MainDatabase[(Main database)]
  end
  DocumentFlow -. "access main database" .-> Databases.MainDatabase
`;case"index":return`---
title: "Landscape view"
---
graph TB
  Customer[fa:fa-user User]
  DocumentFlow[Envio de documentos]
  Databases[Databases]
  Customer -. "User accesses API Gateway" .-> DocumentFlow
  DocumentFlow -. "access main database" .-> Databases
`;case"view_e77d2t":return`---
title: "Envio de documentos"
---
graph TB
  Customer[fa:fa-user User]
  subgraph DocumentFlow["Envio de documentos"]
    DocumentFlow.MqNotification[(Mq Notification)]
    DocumentFlow.MqSignUp[(Mq SignUp)]
    DocumentFlow.MqLogin[(Mq Login)]
    DocumentFlow.DocumentFlowApiGateway[documentFlowApiGateway]
    DocumentFlow.LoginMs[loginMs]
    DocumentFlow.SignUpMs[signUpMs]
    DocumentFlow.NotificationMs[notificationMs]
    DocumentFlow.DocumentMs[documentMs]
  end
  DatabasesMainDatabase[(Main database)]
  Customer -. "User accesses API Gateway" .-> DocumentFlow.DocumentFlowApiGateway
  DocumentFlow.DocumentFlowApiGateway -. "Backend uses documentMs" .-> DocumentFlow.DocumentMs
  DocumentFlow.DocumentFlowApiGateway -. "Backend uses notificationMs" .-> DocumentFlow.NotificationMs
  DocumentFlow.DocumentFlowApiGateway -. "Backend uses signUpMs" .-> DocumentFlow.SignUpMs
  DocumentFlow.DocumentFlowApiGateway -. "Backend uses loginMs" .-> DocumentFlow.LoginMs
  DocumentFlow.LoginMs -. "access main database" .-> DatabasesMainDatabase
  DocumentFlow.SignUpMs -. "access main database" .-> DatabasesMainDatabase
  DocumentFlow.NotificationMs -. "access main database" .-> DatabasesMainDatabase
  DocumentFlow.DocumentMs -. "access main database" .-> DatabasesMainDatabase
`;default:throw new Error("Unknown viewId: "+n)}}export{t as d2Source,e as dotSource,a as mmdSource,o as svgSource};
