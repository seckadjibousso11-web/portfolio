const $=s=>document.querySelector(s);
const NAV=[["index.html#home","Accueil"],["index.html#about","À propos"],["index.html#parcours","Parcours"],["projects.html","Projets"],["veille.html","Veille"],["index.html#contact","Contact"]];
const page=document.body.dataset.page;
const tags=a=>a.map(t=>`<span class="tag">${t}</span>`).join("");
const img=(src,alt)=>`<img src="${src}" alt="${alt}" loading="lazy" onerror="this.style.display='none'">`;
const full=PROFILE.prenom+" "+PROFILE.nom;
$("#site-header").innerHTML=`<div class="wrap bar"><a class="brand" href="index.html">${PROFILE.prenom}<b>.</b>${PROFILE.nom}</a>
<button id="burger" aria-label="Menu">☰</button><nav id="nav">${NAV.map(([h,l])=>`<a href="${h}" data-p="${h.split('#')[0]}">${l}</a>`).join("")}</nav></div>`;
$("#burger").onclick=()=>$("#nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a=>{if(a.dataset.p===location.pathname.split("/").pop()&&page!=="home")a.classList.add("on");a.onclick=()=>$("#nav").classList.remove("open")});
$("#site-footer").innerHTML=`<div class="wrap">© ${new Date().getFullYear()} ${full} · Portfolio BTS SIO SISR · Session ${PROFILE.session}</div>`;
document.title=({home:"Portfolio",projects:"Projets",details:"Projet",veille:"Veille"}[page]||"Portfolio")+" | "+full;

if(page==="home"){
 $("#h-name").textContent=full; $("#h-title").textContent=PROFILE.titre; $("#h-text").textContent=PROFILE.accroche;
 $("#cv-btn").href=PROFILE.cv; $("#gh-btn").href=PROFILE.github;
 $("#about-txt").innerHTML=PROFILE.apropos.map(p=>`<p>${p}</p>`).join("");
 $("#avatar").textContent=PROFILE.prenom[0]; $("#a-name").textContent=full; $("#a-role").textContent=PROFILE.titre; $("#a-status").textContent=PROFILE.statut;
 $("#cv-btn2").href=PROFILE.cv; $("#chips").innerHTML=`<span class="chip">📍 ${PROFILE.ville}</span><span class="chip">🗣 ${PROFILE.langues}</span>`;
 document.body.insertAdjacentHTML("beforeend",'<div id="modal"><div class="box"></div></div>');
 $("#skills").innerHTML=COMPETENCES.map((c,i)=>`<button class="skill" data-i="${i}"><span class="ic">${c.icone}</span>${c.nom}<small>En savoir plus →</small></button>`).join("");
 document.querySelectorAll(".skill").forEach(b=>b.onclick=()=>{const c=COMPETENCES[b.dataset.i];$("#modal .box").innerHTML=`<button aria-label="Fermer">×</button><h3>${c.icone} ${c.nom}</h3><p>${c.desc}</p><p><b>Ce que j'ai fait :</b> ${c.fait}</p>`;$("#modal").classList.add("open");$("#modal button").onclick=()=>$("#modal").classList.remove("open")});
 $("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.remove("open")};
 $("#experiences").innerHTML=PARCOURS.experiences.map(e=>`<div class="it"><div class="meta">${e.date} · ${e.lieu}</div><h3>${e.titre}</h3><p>${e.desc}</p><a href="projects.html#${e.id}">Voir les missions</a></div>`).join("");
}
if(page==="details"){
 const p=PROJETS.find(x=>x.id===new URLSearchParams(location.search).get("id"));
 $("#detail").innerHTML=p?`<p><a href="projects.html">← Tous les projets</a></p><div class="meta">${p.date} · ${p.categorie}</div><h1>${p.titre}</h1>
 <h2>Contexte</h2><p>${p.contexte}</p><h2>Technologies</h2><p>${tags(p.technos)}</p>
 <h2>Mes missions</h2><ul>${p.missions.map(m=>`<li>${m}</li>`).join("")}</ul>
 ${p.competences.length?`<h2>Compétences du référentiel</h2><p>${tags(p.competences)}</p>`:""}
 <h2>Captures d'écran</h2>${p.captures.length?`<div class="shots">${p.captures.map(c=>`<a href="${c}" target="_blank"><img src="${c}" alt="Capture ${p.titre}"></a>`).join("")}</div>`:`<p class="todo">Aucune capture pour l'instant.</p>`}
 <h2>Documents</h2>${p.documents.length?`<ul>${p.documents.map(d=>`<li><a href="${d.fichier}" target="_blank">${d.nom}</a></li>`).join("")}</ul>`:`<p class="todo">Aucun document pour l'instant.</p>`}`:"<p>Projet introuvable.</p>";
}
if(page==="veille"){
 $("#v-sujet").textContent=VEILLE.sujet; $("#v-why").textContent=VEILLE.pourquoi;
 $("#v-outils").innerHTML=tags(VEILLE.outils); $("#v-sources").innerHTML=VEILLE.sources.map(s=>`<li>${s}</li>`).join("");
 $("#v-syn").innerHTML=VEILLE.syntheses.map(s=>`<div class="it"><div class="meta">${s.date} · ${s.source}</div><h3>${s.titre}</h3><p>${s.resume}</p><a href="${s.lien}" target="_blank" rel="noopener">Lire la source</a></div>`).join("");
}

/* ===== OUTILS UTILISÉS : modifiez cette liste (nom, logo) ===== */
const TECHS=[["Windows Server","windows"],["Windows 10","windows"],["Linux","linux"],["VMware","vmware"],["pfSense","pfsense"],["MikroTik","mikrotik"],["GNS3",""],["GitHub","github"],["VS Code","visualstudiocode"]];
if(page==="home"){
 const css=`.mq{overflow:hidden;margin:14px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.mt{display:flex;width:max-content;animation:mv 30s linear infinite}.mt.rev{animation-direction:reverse}.mq:hover .mt{animation-play-state:paused}
@keyframes mv{to{transform:translateX(-25%)}}
.tp{display:flex;align-items:center;gap:12px;background:var(--card);border:1px solid var(--line);border-radius:99px;padding:8px 22px 8px 8px;margin-right:16px;font-weight:600;white-space:nowrap}
.lg{position:relative;width:40px;height:40px;border-radius:10px;background:#fff;display:grid;place-items:center;color:#333;font-weight:800}
.lg img{position:absolute;inset:7px;width:26px;height:26px;background:#fff}
@media(prefers-reduced-motion:reduce){.mt{animation:none;flex-wrap:wrap;width:auto}}`;
 document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
 const pill=([n,s])=>`<span class="tp"><span class="lg">${s?`<img src="https://cdn.jsdelivr.net/npm/simple-icons@9.21.0/icons/${s}.svg" alt="" onerror="this.remove()">`:""}<b>${n[0]}</b></span>${n}</span>`;
 const row=(arr,cls)=>`<div class="mq"><div class="mt ${cls}">${arr.concat(arr,arr,arr).map(pill).join("")}</div></div>`;
 const h=Math.ceil(TECHS.length/2);
 $("#about").insertAdjacentHTML("afterend",`<section id="stack"><div class="wrap"><div class="kicker mono">02. Stack</div><h2>Technologies utilisées</h2><p class="sub">Les outils que j'utilise pour installer, configurer et sécuriser des systèmes et des réseaux.</p><p class="meta mono">Systèmes · Réseau · Virtualisation · Développement</p>${row(TECHS.slice(0,h),"")}${row(TECHS.slice(h),"rev")}</div></section>`);
}

/* ===== PARCOURS SCOLAIRE : frise verticale (données dans data.js > PARCOURS.formation) ===== */
if(page==="home"){
 const css=`#parcours .ctr{display:block;text-align:center;border:0;margin:0 0 36px}
.kc{text-align:center}
.st{position:relative;max-width:860px;margin:0 auto 50px;padding-left:52px}
.st:before{content:"";position:absolute;left:11px;top:12px;bottom:12px;width:2px;background:var(--line)}
.si{position:relative;margin-bottom:38px}
.si:before{content:"";position:absolute;left:-52px;top:2px;width:24px;height:24px;border-radius:50%;background:var(--bg);border:2px solid var(--line)}
.si.now:before{border-color:var(--acc);box-shadow:0 0 14px rgba(164,93,240,.55)}
.sh{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.sh h3{margin:0;font-size:1.25rem}
.pill{border:1px solid var(--line);border-radius:99px;padding:3px 14px;font-family:Consolas,monospace;font-size:13px;color:var(--mute);white-space:nowrap}
.si.now .pill{border-color:#4b2a7a;background:#2a1a40;color:var(--acc)}
.si .lieu{font-weight:700;margin:8px 0 4px}.si p{color:var(--mute);margin:0}`;
 document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
 const w=$("#parcours .wrap");
 w.querySelector("h2").outerHTML='<div class="kicker mono kc">03. Formation</div><h2 class="ctr">Parcours scolaire</h2>';
 w.querySelector(".sub").remove(); w.querySelector("h3").remove();
 $("#formation").outerHTML='<div class="st">'+PARCOURS.formation.map(f=>`<div class="si${f.now?" now":""}"><div class="sh"><h3>${f.titre}</h3><span class="pill">${f.date}</span></div><div class="lieu">${f.lieu}</div><p>${f.desc}</p></div>`).join("")+"</div>";
}

/* ===== CONTACT : cartes + formulaire (infos dans data.js > PROFILE) ===== */
if(page==="home"){
 const ic=p=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
 const I={
  mail:ic('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
  li:ic('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
  gh:ic('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
  pin:ic('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
  send:ic('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>'),
  user:ic('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
  tag:ic('<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>'),
  msg:ic('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>')
 };
 const css=`.ct{display:grid;gap:44px;grid-template-columns:1fr 1.35fr;align-items:start;margin-top:10px}
@media(max-width:900px){.ct{grid-template-columns:1fr}}
.ctl p{color:var(--mute);font-size:1.05rem;margin:6px 0 22px;line-height:1.9}
.cc{display:flex;align-items:center;gap:18px;background:#0f0f12;border:1px solid var(--line);border-radius:16px;padding:20px 22px;margin-bottom:16px;color:var(--ink);text-decoration:none}
a.cc:hover{border-color:var(--acc)}
.ci{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;flex:none;border:1px solid rgba(255,255,255,.06)}
.c1{background:#2a1a40;color:#b57cf7}.c2{background:#14263f;color:#5aa7ff}.c3{background:#1f1830;color:#c39bff}.c4{background:#12281c;color:#3ddc84}
.cc small{display:block;color:var(--mute);font-family:Consolas,monospace;font-size:13px;margin-bottom:2px}.cc b{font-size:1.1rem;word-break:break-all}
.dot{width:12px;height:12px;border-radius:50%;background:#22c55e;flex:none;margin:0 8px 0 4px}
.cc.av small{margin:4px 0 0}
.fm{background:#151518;border:1px solid #2a2338;border-radius:26px;padding:40px}
.fh{display:flex;align-items:center;gap:16px;margin-bottom:28px}.fh .ci{width:50px;height:50px;background:#2a1a40;color:#b57cf7}
.fh h3{margin:0;font-size:1.2rem}.fh small{font-family:Consolas,monospace;font-size:13px;color:var(--mute)}
.fr{display:grid;gap:20px;grid-template-columns:1fr 1fr}@media(max-width:600px){.fr{grid-template-columns:1fr}.fm{padding:24px}}
.fm label{display:flex;align-items:center;gap:8px;font-family:Consolas,monospace;font-size:13px;color:var(--mute);margin:20px 0 10px}
.fm label svg{width:14px;height:14px;color:#a45df0}.fr label{margin-top:0}
.rq{color:#f0506e}
.fm input,.fm textarea{width:100%;background:#1e1e22;border:1px solid #2a2a31;border-radius:14px;padding:18px 20px;color:var(--ink);font:inherit}
.fm input::placeholder,.fm textarea::placeholder{color:#6f6c80}
.fm input:focus,.fm textarea:focus{outline:2px solid var(--acc);border-color:var(--acc)}
.fm textarea{min-height:170px;resize:vertical}
.cnt{text-align:right;font-family:Consolas,monospace;font-size:13px;color:var(--acc);margin:12px 0 22px}
.fm button{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;border:0;border-radius:14px;background:#a855f7;color:#fff;font:700 1.05rem "Segoe UI",system-ui,sans-serif;padding:18px;cursor:pointer}
.fm button svg{width:20px;height:20px}.fm button:hover{background:#b46cf9}
#fmok{display:none;margin:16px 0 0;color:#22c55e}`;
 document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
 const liShort=PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/,""), ghShort=PROFILE.github.replace(/^https?:\/\/(www\.)?/,"");
 $("#contact .wrap").innerHTML=`<div class="kicker mono">06. Contact</div><h2 style="border:0;font-size:clamp(2rem,5vw,3rem);margin-bottom:40px">Me Contacter</h2>
 <div class="ct"><div class="ctl"><p>Vous avez une question ou souhaitez échanger ? Contactez-moi via le formulaire ou directement par l'un des canaux ci-dessous.</p>
  <a class="cc" href="mailto:${PROFILE.email}"><span class="ci c1">${I.mail}</span><span><small>Email</small><b>${PROFILE.email}</b></span></a>
  <a class="cc" href="${PROFILE.linkedin}" target="_blank" rel="noopener"><span class="ci c2">${I.li}</span><span><small>LinkedIn</small><b>${liShort}</b></span></a>
  <a class="cc" href="${PROFILE.github}" target="_blank" rel="noopener"><span class="ci c3">${I.gh}</span><span><small>GitHub</small><b>${ghShort}</b></span></a>
  <div class="cc"><span class="ci c4">${I.pin}</span><span><small>Localisation</small><b>${PROFILE.ville}</b></span></div>
  <div class="cc av"><span class="dot"></span><span><b>${PROFILE.statut}</b><small>Session d'examen ${PROFILE.session}</small></span></div>
 </div>
 <form class="fm" id="fm"><div class="fh"><span class="ci">${I.send}</span><div><h3>Envoyer un message</h3><small>Je réponds sous 24-48h</small></div></div>
  <div class="fr"><div><label for="fn">${I.user}Votre nom</label><input id="fn" placeholder="Prénom Nom" autocomplete="name"></div>
  <div><label for="fe">${I.mail}Email <span class="rq">*</span></label><input id="fe" type="email" required placeholder="votre@email.com" autocomplete="email"></div></div>
  <label for="fs">${I.tag}Sujet</label><input id="fs" placeholder="Question, proposition de stage...">
  <label for="fmsg">${I.msg}Message <span class="rq">*</span></label><textarea id="fmsg" required maxlength="1000" placeholder="Bonjour, je souhaite..."></textarea>
  <div class="cnt" id="cnt">0 caractère</div><button type="submit">${I.send}Envoyer le message</button><p id="fmok">Votre application de messagerie s'ouvre avec le message prêt à envoyer.</p></form></div>`;
 $("#fmsg").oninput=e=>{const n=e.target.value.length;$("#cnt").textContent=n+(n>1?" caractères":" caractère")};
 $("#fm").onsubmit=async e=>{e.preventDefault();
  const btn=$("#fm button[type=submit]"),ok=$("#fmok");
  const data={name:$("#fn").value||"Visiteur",email:$("#fe").value,_replyto:$("#fe").value,_subject:$("#fs").value||"Contact depuis le portfolio",message:$("#fmsg").value,_captcha:"false",_template:"table"};
  btn.disabled=true;ok.style.display="block";ok.style.color="var(--mute)";ok.textContent="Envoi en cours...";
  try{
   const r=await fetch("https://formsubmit.co/ajax/"+PROFILE.email,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(data)});
   const j=await r.json();
   if(!r.ok||j.success===false||j.success==="false")throw new Error(j.message||"erreur");
   ok.style.color="#22c55e";ok.textContent="Message envoyé. Merci, je vous répondrai rapidement.";
   $("#fm").reset();$("#cnt").textContent="0 caractère";
  }catch(err){
   const su=encodeURIComponent($("#fs").value||"Contact depuis le portfolio"),bo=encodeURIComponent($("#fmsg").value+"\n\n"+($("#fn").value||"")+"\n"+$("#fe").value);
   ok.style.color="#f0506e";ok.innerHTML=`L'envoi a échoué. Vous pouvez m'écrire directement : <a href="https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${su}&body=${bo}" target="_blank" rel="noopener">ouvrir Gmail avec votre message</a> ou <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>.<br><small id="fmerr" style="color:var(--mute)"></small>`;
   $("#fmerr").textContent="Détail technique : "+(err&&err.message?err.message:"connexion impossible");
  }
  btn.disabled=false};
}

/* ===== PIED DE PAGE (affiché sur toutes les pages) ===== */
(function(){
 const fic=p=>`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
 const FI={
  gh:fic('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>'),
  li:fic('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
  cv:fic('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><polyline points="9 14 12 17 15 14"/>'),
  mail:fic('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
  pin:fic('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
  up:fic('<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>')
 };
 const css=`#site-footer{border-top:1px solid var(--line);padding:70px 0 30px;text-align:left;font-size:16px;color:var(--mute);margin-top:30px}
#site-footer .fg{display:grid;gap:50px;grid-template-columns:1.7fr 1fr 1.2fr}
@media(max-width:800px){#site-footer .fg{grid-template-columns:1fr;gap:34px}}
#site-footer .fb{font-weight:800;font-size:1.5rem;letter-spacing:.08em;text-transform:uppercase;color:#d9b8ff}#site-footer .fb b{color:#a855f7}
#site-footer p.fd{max-width:46ch;line-height:1.9;margin:22px 0 28px}
#site-footer .so{display:flex;gap:16px}
#site-footer .so a{width:48px;height:48px;border-radius:12px;border:1px solid var(--line);background:#0f0f12;display:grid;place-items:center;color:var(--ink)}
#site-footer .so a:hover{border-color:var(--acc);color:var(--acc)}
#site-footer h4{margin:0 0 22px;color:var(--ink);font-size:1.1rem}
#site-footer ul{list-style:none;margin:0;padding:0}#site-footer li{margin-bottom:16px}
#site-footer li a{color:var(--mute);text-decoration:none;padding-left:14px}#site-footer li a:hover{color:var(--acc)}
#site-footer .fi{display:flex;gap:14px;align-items:flex-start;margin-bottom:26px}
#site-footer .fi svg{margin-top:20px;flex:none}.fi .m{color:#a45df0}.fi .g{color:#3ddc84}
#site-footer .fi small{display:block;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#7fb2e6;margin-bottom:4px}
#site-footer .fi span{word-break:break-all}
#site-footer .fz{display:flex;justify-content:space-between;align-items:center;gap:16px;border-top:1px solid var(--line);margin-top:50px;padding-top:34px;font-family:Consolas,monospace;font-size:14px}
#site-footer .up{width:52px;height:52px;border-radius:12px;border:1px solid #3a2a5c;background:#1a1030;color:#b57cf7;display:grid;place-items:center;cursor:pointer}
#site-footer .up:hover{border-color:var(--acc)}`;
 document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
 const items=NAV.slice(0,5).map(([h,l])=>`<li><a href="${h}">${l}</a></li>`).join("");
 const texte=PROFILE.pied||"Étudiante en BTS SIO option SISR à l'ITIC Paris, je me forme à l'administration des systèmes et des réseaux et à la sécurisation des infrastructures.";
 $("#site-footer").innerHTML=`<div class="wrap"><div class="fg">
  <div><div class="fb">${full}<b>.</b></div><p class="fd">${texte}</p>
   <div class="so"><a href="${PROFILE.github}" target="_blank" rel="noopener" aria-label="GitHub">${FI.gh}</a><a href="${PROFILE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${FI.li}</a><a href="${PROFILE.cv}" target="_blank" rel="noopener" aria-label="Télécharger mon CV">${FI.cv}</a></div></div>
  <div><h4>Navigation</h4><ul>${items}</ul></div>
  <div><h4>Contact</h4><div class="fi"><span class="m">${FI.mail}</span><div><small>Email</small><span>${PROFILE.email}</span></div></div>
   <div class="fi"><span class="g">${FI.pin}</span><div><small>Localisation</small><span>${PROFILE.ville}</span></div></div></div>
 </div>
 <div class="fz"><span>© ${new Date().getFullYear()} ${full} — Tous droits réservés</span><button class="up" id="up" aria-label="Retour en haut">${FI.up}</button></div></div>`;
 $("#up").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
})();

/* ===== EXPÉRIENCES + SECTION « PROJETS & MISSIONS » (accueil) ===== */
if(page==="home"){
 const css=`#exp .ctr,#pf .ctr{display:block;text-align:center;border:0;margin:0 0 30px}
#exp .tl{max-width:860px;margin:0 auto}
#pf{background:#0d0d10;text-align:center;padding:90px 0}
#pf p.pt{max-width:56ch;margin:0 auto 34px;color:var(--mute);font-size:1.1rem;line-height:1.9}
#pf .pfb{display:inline-flex;align-items:center;gap:10px;padding:17px 32px;border-radius:12px;font-size:1.05rem;margin:0}`;
 document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
 const par=$("#parcours"), exp=$("#experiences");
 const oldH=par.querySelector(".wrap > h3"); if(oldH) oldH.remove();
 par.insertAdjacentHTML("afterend",'<section id="exp"><div class="wrap"><div class="kicker mono kc">04. Expériences</div><h2 class="ctr">Expériences professionnelles</h2></div></section>');
 $("#exp .wrap").appendChild(exp);
 const folder='<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>';
 $("#exp").insertAdjacentHTML("afterend",`<section id="pf"><div class="wrap"><div class="kicker mono">05. Portfolio</div><h2 class="ctr">Projets &amp; Missions</h2><p class="pt">Mes projets de formation et mes missions de stage sont regroupés sur une page dédiée, avec captures d'écran et documents.</p><a class="btn pfb" href="projects.html">${folder}Accéder au Portfolio</a></div></section>`);
}

/* ===== PAGE PROJETS & MISSIONS (données dans data.js > PROJETS) ===== */
if(page==="projects"){
 const sv=(p,s=26)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
 const IC={
  server:sv('<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>'),
  network:sv('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>'),
  file:sv('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>')
 };
 const FL={all:sv('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',16),
  formation:sv('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',16),
  stage:sv('<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',16)};
 const css=`.ph{text-align:center;max-width:640px;margin:0 auto 34px}.ph h1{font-size:clamp(2.2rem,6vw,3.4rem);margin:.15em 0}.ph p{color:var(--mute)}
.fb2{position:sticky;top:60px;z-index:4;background:var(--bg);border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:0 -20px 44px;padding:16px 20px}
.fb2 .in{display:flex;gap:12px;flex-wrap:wrap;max-width:1040px;margin:auto}
.fb2 button{display:flex;align-items:center;gap:8px;background:#101014;color:var(--ink);border:1px solid var(--line);border-radius:10px;padding:10px 18px;font:14px Consolas,monospace;cursor:pointer}
.fb2 button.on{background:#a855f7;border-color:#a855f7;color:#fff;box-shadow:0 0 18px rgba(168,85,247,.45)}
.pt2{font-size:1.7rem;margin:0;border:0}.pst{color:var(--mute);font-family:Consolas,monospace;margin:4px 0 26px}
.pg{display:grid;gap:36px;grid-template-columns:repeat(auto-fit,minmax(310px,1fr))}
.pc{display:flex;flex-direction:column;background:#101014;border:1px solid var(--line);border-radius:22px;overflow:hidden;color:var(--ink);text-decoration:none}
.pc:hover{border-color:var(--c)}
.pc .im{height:200px;background:linear-gradient(135deg,var(--f),#0d0d10);display:grid;place-items:center;color:var(--c);position:relative}
.pc .im img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:0;margin:0}
.pc .bd{padding:36px 40px 40px;display:flex;flex-direction:column;flex:1}
.pc .ti{width:60px;height:60px;border-radius:16px;background:var(--f);color:var(--c);display:grid;place-items:center;margin-bottom:26px;border:1px solid rgba(255,255,255,.06)}
.pc h3{margin:0 0 14px;font-size:1.5rem}.pc p{margin:0 0 26px;color:var(--mute);line-height:1.8;flex:1}.pc .go{color:var(--c);font-weight:700}
.vide{color:var(--mute);border:1px dashed var(--line);border-radius:14px;padding:26px;margin-bottom:10px}
.ex{display:grid;grid-template-columns:1fr 1.2fr;margin-top:36px;background:#101014;border:1px solid var(--line);border-radius:22px;overflow:hidden}
@media(max-width:760px){.ex{grid-template-columns:1fr}.pc .bd{padding:28px}}
.ex .vi{min-height:240px;background:linear-gradient(135deg,#2a1a40,#0d0d10);display:grid;place-items:center;color:#b57cf7;position:relative}
.ex .vi img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:0;margin:0}
.ex .tx{padding:36px}.ex h3{margin:0 0 12px;font-size:1.5rem}.ex p{color:var(--mute);margin:0 0 22px;line-height:1.8}`;
 document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
 const cats=["stage","formation"];
 const nom={formation:"Formation",stage:"Stages",alternance:"Alternance"};
 $("main").innerHTML=`<div class="ph"><div class="kicker mono">05. Portfolio</div><h1>Projets &amp; <span style="color:#a855f7">Missions</span></h1><p>Présentation détaillée de mes stages et de mes travaux de formation, avec accès aux dossiers du BTS.</p></div>
 <div class="fb2"><div class="in"><button class="on" data-f="all">${FL.all}Tout</button>${cats.map(c=>`<button data-f="${c}">${FL[c]||FL.all}${nom[c]||c}</button>`).join("")}</div></div><div id="pl"></div>`;
 const card=p=>`<a class="pc" href="details.html?id=${p.id}" style="--c:${p.couleur};--f:${p.fond}"><div class="im">${IC[p.icone]||""}${p.image?img(p.image,p.titre):""}</div><div class="bd"><span class="ti">${IC[p.icone]||""}</span><h3>${p.titre}</h3><p>${p.resume}</p><span class="go">Consulter le détail →</span></div></a>`;
 const draw=f=>{const l=PROJETS.filter(p=>f==="all"||p.categorie===f);
  const st=l.filter(p=>p.categorie==="stage"),at=l.filter(p=>p.categorie==="formation"&&p.type!=="examen"),ex=l.find(p=>p.type==="examen");
  let h="";
  if(st.length||f==="stage")h+=`<h2 class="pt2">Stages</h2><p class="pst">Entreprises d'accueil</p>`+(st.length?`<div class="pg">${st.map(card).join("")}</div>`:`<p class="vide">Mes stages seront présentés ici : entreprise, période et missions réalisées.</p>`);
  if(at.length||ex)h+=`<h2 class="pt2" style="margin-top:${h?"64px":"0"}">Travaux de Formation</h2><p class="pst">Parcours BTS SIO SISR</p><div class="pg">${at.map(card).join("")}</div>`
   +(ex?`<div class="ex"><div class="vi">${IC.file}${ex.image?img(ex.image,ex.titre):""}</div><div class="tx"><h3>${ex.titre}</h3><p>${ex.resume}</p><a class="btn" href="details.html?id=${ex.id}">Accéder aux dossiers</a></div></div>`:"");
  $("#pl").innerHTML=h};
 document.querySelectorAll(".fb2 button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".fb2 button").forEach(x=>x.classList.remove("on"));b.classList.add("on");draw(b.dataset.f)});
 draw("all");
}
