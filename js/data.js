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
  ville:"Paris, France", langues:"FR", email:"boussoseckadji6@gmail.com",
  linkedin:"https://www.linkedin.com/",
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
    {date:"À compléter",titre:"BTS SIO option SISR",lieu:"ITIC Paris",desc:"Solutions d'infrastructure, systèmes et réseaux. Formation initiale."},
    {date:"Année",titre:"Baccalauréat (série)",lieu:"Lycée, ville",desc:"À compléter"}
  ],
  experiences:[
    {id:"stage",date:"Date début – date fin",titre:"Stage 1",lieu:"Nom de l'entreprise",desc:"Missions principales. (À compléter)"},
    {id:"stage",date:"Date début – date fin",titre:"Stage 2",lieu:"Nom de l'entreprise",desc:"À compléter"}
  ]
};
/* categorie : "stage" | "formation"  — image : captures à déposer dans assets/projects/ */
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
  {id:"projet2",titre:"Titre du projet 2",categorie:"stage",date:"2025",
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
