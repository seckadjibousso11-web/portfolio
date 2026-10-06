/* ===== FICHIER À COMPLÉTER : toutes vos informations sont ici ===== */
const PROFILE={
  prenom:"Prénom", nom:"NOM", titre:"Étudiant BTS SIO option SISR",
  session:"2026",
  accroche:"Passionné par les systèmes, les réseaux et la cybersécurité. À compléter.",
  apropos:[
    "Présentez-vous en 2 ou 3 phrases : qui vous êtes, d'où vient votre intérêt pour l'informatique. (À compléter)",
    "Parlez de votre formation et de votre alternance ou stage. (À compléter)",
    "Indiquez votre objectif : poursuite d'études ou emploi. (À compléter)"
  ],
  ville:"Ville, France", email:"email@exemple.fr",
  linkedin:"https://www.linkedin.com/",
  github:"https://github.com/seckadjibousso11-web",
  cv:"pdf/cv.pdf"
};
const STACK={
  "Systèmes":["Windows Server","Active Directory","Debian"],
  "Réseau":["pfSense","VLAN","VPN"],
  "Virtualisation":["Proxmox","Hyper-V"],
  "Supervision et gestion":["Zabbix","GLPI"],
  "Scripts":["PowerShell","Bash"]
};
const PARCOURS={
  formation:[
    {date:"2024 – 2026",titre:"BTS SIO option SISR",lieu:"Établissement, ville",desc:"Solutions d'infrastructure, systèmes et réseaux. (À compléter)"},
    {date:"Année",titre:"Baccalauréat (série)",lieu:"Lycée, ville",desc:"À compléter"}
  ],
  experiences:[
    {id:"alternance",date:"Date début – en cours",titre:"Alternance",lieu:"Nom de l'entreprise",desc:"Missions principales. (À compléter)"},
    {id:"stage",date:"Date début – date fin",titre:"Stage",lieu:"Nom de l'entreprise",desc:"À compléter"}
  ]
};
/* categorie : "alternance" | "stage" | "formation"  — image : captures à déposer dans assets/projects/ */
const PROJETS=[
  {id:"projet1",titre:"Titre du projet 1",categorie:"formation",date:"2025",
   resume:"Une phrase qui résume le projet. (À compléter)",
   contexte:"Pourquoi ce projet ? Quel besoin, quel client, quelle consigne ? (À compléter)",
   technos:["Windows Server","Active Directory"],
   missions:["Ce que j'ai fait, étape 1","Étape 2","Étape 3"],
   competences:["B1.1","B2.1"],
   image:"assets/projects/projet1.png",
   captures:[],
   documents:[]},
  {id:"projet2",titre:"Titre du projet 2",categorie:"alternance",date:"2025",
   resume:"À compléter",contexte:"À compléter",technos:["pfSense"],missions:["À compléter"],
   competences:[],image:"assets/projects/projet2.png",captures:[],documents:[]}
];
const VEILLE={
  sujet:"Sujet de votre veille technologique (À compléter)",
  pourquoi:"Pourquoi ce sujet, lien avec le BTS et vos missions. (À compléter)",
  outils:["Feedly","Google Alerts"],
  sources:["ANSSI / CERT-FR","LeMagIT","Cybermalveillance.gouv.fr"],
  syntheses:[
    {date:"JJ/MM/AAAA",titre:"Titre de l'article",source:"Nom du site",lien:"#",resume:"Résumé en 3 lignes et ce que vous en retenez. (À compléter)"}
  ]
};
