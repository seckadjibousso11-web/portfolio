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
if(page==="projects"){
 const draw=f=>{$("#list").innerHTML=PROJETS.filter(p=>f==="all"||p.categorie===f).map(p=>`<article class="card" id="${p.id}">${img(p.image,p.titre)}<div class="meta">${p.date} · ${p.categorie}</div><h3>${p.titre}</h3><p>${p.resume}</p>${tags(p.technos)}<p><a href="details.html?id=${p.id}">Voir le détail</a></p></article>`).join("")||"<p>Aucun projet dans cette catégorie.</p>"};
 document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("on"));b.classList.add("on");draw(b.dataset.f)});
 draw("all");
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
 const css=`.ct{display:grid;gap:30px;grid-template-columns:1fr 1.25fr;align-items:start;margin-top:28px}
@media(max-width:860px){.ct{grid-template-columns:1fr}}
.cc{display:flex;align-items:center;gap:16px;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px;margin-bottom:14px;color:var(--ink);text-decoration:none}
a.cc:hover{border-color:var(--acc)}
.ci{width:46px;height:46px;border-radius:12px;background:#2a1a40;display:grid;place-items:center;font-size:20px;flex:none}
.cc small{display:block;color:var(--mute);font-family:Consolas,monospace;font-size:13px}.cc b{font-size:1.05rem;word-break:break-all}
.dot{width:12px;height:12px;border-radius:50%;background:#22c55e;flex:none;margin:0 6px}
.fm{background:var(--card);border:1px solid #2d2144;border-radius:18px;padding:26px}
.fm h3{margin:0}.fm .meta{margin:2px 0 18px}
.fr{display:grid;gap:14px;grid-template-columns:1fr 1fr}@media(max-width:600px){.fr{grid-template-columns:1fr}}
.fm label{display:block;font-family:Consolas,monospace;font-size:13px;color:var(--mute);margin:12px 0 6px}
.fm input,.fm textarea{width:100%;background:#1c1c22;border:1px solid var(--line);border-radius:10px;padding:13px 14px;color:var(--ink);font:inherit}
.fm input:focus,.fm textarea:focus{outline:2px solid var(--acc);border-color:var(--acc)}
.fm textarea{min-height:150px;resize:vertical}
.cnt{text-align:right;font-family:Consolas,monospace;font-size:13px;color:var(--acc);margin:6px 0 14px}
.fm button{width:100%;border:0;border-radius:10px;background:var(--acc);color:#fff;font:700 1rem inherit;padding:14px;cursor:pointer}
#fmok{display:none;margin-top:14px;color:#22c55e}`;
 document.head.insertAdjacentHTML("beforeend","<style>"+css+"</style>");
 const liShort=PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/,""), ghShort=PROFILE.github.replace(/^https?:\/\/(www\.)?/,"");
 $("#contact .wrap").innerHTML=`<div class="kicker mono">06. Contact</div><h2>Me contacter</h2>
 <p class="sub">Une question ou envie d'échanger ? Écrivez-moi via le formulaire ou directement par l'un des canaux ci-dessous.</p>
 <div class="ct"><div>
  <a class="cc" href="mailto:${PROFILE.email}"><span class="ci">✉️</span><span><small>Email</small><b>${PROFILE.email}</b></span></a>
  <a class="cc" href="${PROFILE.linkedin}" target="_blank" rel="noopener"><span class="ci">💼</span><span><small>LinkedIn</small><b>${liShort}</b></span></a>
  <a class="cc" href="${PROFILE.github}" target="_blank" rel="noopener"><span class="ci">🐙</span><span><small>GitHub</small><b>${ghShort}</b></span></a>
  <div class="cc"><span class="ci">📍</span><span><small>Localisation</small><b>${PROFILE.ville}</b></span></div>
  <div class="cc"><span class="dot"></span><span><b>${PROFILE.statut}</b><small>Session d'examen ${PROFILE.session}</small></span></div>
 </div>
 <form class="fm" id="fm"><h3>Envoyer un message</h3><div class="meta mono">Je réponds sous 24 à 48 h</div>
  <div class="fr"><div><label for="fn">Votre nom</label><input id="fn" placeholder="Prénom Nom" autocomplete="name"></div>
  <div><label for="fe">Email *</label><input id="fe" type="email" required placeholder="votre@email.com" autocomplete="email"></div></div>
  <label for="fs">Sujet</label><input id="fs" placeholder="Question, proposition de stage...">
  <label for="fmsg">Message *</label><textarea id="fmsg" required maxlength="1000" placeholder="Bonjour, je souhaite..."></textarea>
  <div class="cnt" id="cnt">0 caractère</div><button type="submit">Envoyer le message</button><p id="fmok">Votre application de messagerie s'ouvre avec le message prêt à envoyer.</p></form></div>`;
 $("#fmsg").oninput=e=>{const n=e.target.value.length;$("#cnt").textContent=n+(n>1?" caractères":" caractère")};
 $("#fm").onsubmit=e=>{e.preventDefault();
  const body=$("#fmsg").value+"\n\n"+($("#fn").value||"")+"\n"+$("#fe").value;
  location.href="mailto:"+PROFILE.email+"?subject="+encodeURIComponent($("#fs").value||"Contact depuis le portfolio")+"&body="+encodeURIComponent(body);
  $("#fmok").style.display="block"};
}
