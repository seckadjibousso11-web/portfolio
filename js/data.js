/* ===== FICHIER À COMPLÉTER : toutes vos informations sont ici ===== */
const PROFILE={
  prenom:"Adji Bousso", nom:"SECK", titre:"Étudiante BTS SIO SISR",
  statut:"Formation initiale · ITIC Paris",
  session:"2026-2027",
  accroche:"Étudiante en BTS SIO option SISR à l'ITIC Paris, je me forme à l'administration des systèmes et des réseaux et à la sécurisation des infrastructures.",
  apropos:[
    "Je m'appelle Adji Bousso, je suis étudiante en <b>BTS Services Informatiques aux Organisations</b>, option <b>SISR</b>, à l'<b>ITIC Paris</b>, en formation initiale.",
    "L'informatique m'attire pour une raison simple : j'aime comprendre comment les choses fonctionnent et trouver des solutions quand ça ne marche pas. Ce que je préfère, ce sont les <b>systèmes et les réseaux</b>.",
    "Pendant ma formation, je réalise des projets concrets : installer des serveurs, configurer des réseaux, gérer des utilisateurs et sécuriser l'ensemble. C'est ce qui me permet de passer de la théorie à la pratique.",
    "Je prépare mon diplôme pour la session <b>2026-2027</b> et je m'intéresse particulièrement à la <b>cybersécurité</b>, que j'aimerais approfondir ensuite."
  ],
  ville:"Lieusaint, France", langues:"FR", email:"boussoseckadji6@gmail.com",
  linkedin:"https://www.linkedin.com/in/adji-bousso-seck-1a22aa332",
  github:"https://github.com/seckadjibousso11-web",
  cv:"pdf/cv.pdf"
};
/* Cartes de compétences : "fait" = ce que VOUS avez réalisé (à compléter) */
const COMPETENCES=[
  {icone:"🧩",nom:"Virtualisation",desc:"Faire tourner plusieurs machines virtuelles sur un même ordinateur pour tester des serveurs et des réseaux sans risque.",fait:"À compléter (outil utilisé, projet)."},
  {icone:"👥",nom:"Active Directory",desc:"L'annuaire de Microsoft : il centralise les utilisateurs, les groupes, les ordinateurs et leurs droits d'accès.",fait:"À compléter."},
  {icone:"🌐",nom:"TCP/IP & Réseaux",desc:"Adressage IP, sous-réseaux, VLAN, routage, DNS et DHCP : les bases pour faire communiquer des machines.",fait:"À compléter."},
  {icone:"🪟",nom:"Windows Server",desc:"Le système serveur de Microsoft, utilisé pour installer des rôles et des services (AD, DNS, DHCP, partages).",fait:"À compléter."},
  {icone:"🐧",nom:"Linux (Debian/Ubuntu)",desc:"Système très utilisé sur les serveurs : ligne de commande, services, gestion des droits.",fait:"À compléter."},
  {icone:"💻",nom:"VS Code & Scripting",desc:"Automatiser des tâches répétitives avec des scripts (PowerShell, Bash) écrits dans VS Code.",fait:"À compléter."}
];
const PARCOURS={
  formation:[
    {date:"2025 — 2027 · En cours",titre:"BTS SIO option SISR",lieu:"ITIC Paris, France",desc:"Solutions d'Infrastructure, Systèmes et Réseaux. Spécialisation en administration systèmes sécurisés et architecture réseau.",now:true},
    {date:"2024 — 2025",titre:"Licence professionnelle en industrie",lieu:"Dakar, Sénégal",desc:"Licence professionnelle dans le domaine de l'industrie."},
    {date:"2023 — 2024",titre:"Baccalauréat scientifique",lieu:"Lycée Seydina Limamou Laye, Dakar, Sénégal",desc:"Obtention du baccalauréat scientifique."}
  ],
  experiences:[
    {id:"stage",date:"Date début – date fin",titre:"Stage 1",lieu:"Nom de l'entreprise",desc:"Missions principales. (À compléter)"},
    {id:"stage",date:"Date début – date fin",titre:"Stage 2",lieu:"Nom de l'entreprise",desc:"À compléter"}
  ]
};
/* categorie : "stage" | "formation"  — image : captures à déposer dans assets/projects/ */
const PROJETS=[
  {id:"sio_sys",type:"atelier",titre:"Ateliers Systèmes",categorie:"formation",date:"2025 — 2027",icone:"server",couleur:"blue",image:"assets/projects/sio_sys.jpg",
   resume:"Administration de Windows Server et de Linux dans des environnements virtualisés (VMware). Installation, configuration des services et gestion des postes Windows 10.",
   contexte:"Ateliers réalisés pendant le BTS SIO option SISR à l'ITIC Paris. (À compléter : sujet, consignes, durée)",
   technos:["Windows Server","Windows 10","Linux","VMware"],
   missions:["À compléter : étape 1","À compléter : étape 2","À compléter : étape 3"],
   competences:[],captures:[],documents:[]},
  {id:"sio_net",type:"atelier",titre:"Ateliers Réseaux",categorie:"formation",date:"2025 — 2027",icone:"network",couleur:"orange",image:"assets/projects/sio_net.jpg",
   resume:"Architecture et paramétrage d'équipements réseau avec MikroTik et pfSense. Simulation et validation de topologies sous GNS3.",
   contexte:"Ateliers réalisés pendant le BTS SIO option SISR à l'ITIC Paris. (À compléter : sujet, consignes, durée)",
   technos:["MikroTik","pfSense","GNS3"],
   missions:["À compléter : étape 1","À compléter : étape 2","À compléter : étape 3"],
   competences:[],captures:[],documents:[]},
  {id:"bts_exam",type:"examen",titre:"Dossiers d'Examen",categorie:"formation",date:"Session "+"2026-2027",icone:"file",
   resume:"Mes travaux produits pour la soutenance devant le jury du BTS : contextes de réalisation, fiches méthodologiques de résolution de problèmes techniques et documentation associée.",
   image:"assets/projects/bts.jpg",
   contexte:"Dossiers présentés au jury dans le cadre des épreuves professionnelles du BTS SIO option SISR. (À compléter)",
   technos:["Windows Server","pfSense","VMware","Linux"],
   missions:["À compléter : réalisation 1","À compléter : réalisation 2"],
   competences:[],captures:[],documents:[]}
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
