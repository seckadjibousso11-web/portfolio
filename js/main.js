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
 $("#stack").innerHTML=Object.entries(STACK).map(([k,v])=>`<div class="card"><h3>${k}</h3>${tags(v)}</div>`).join("");
 $("#formation").innerHTML=PARCOURS.formation.map(f=>`<div class="it"><div class="meta">${f.date} · ${f.lieu}</div><h3>${f.titre}</h3><p>${f.desc}</p></div>`).join("");
 $("#experiences").innerHTML=PARCOURS.experiences.map(e=>`<div class="it"><div class="meta">${e.date} · ${e.lieu}</div><h3>${e.titre}</h3><p>${e.desc}</p><a href="projects.html#${e.id}">Voir les missions</a></div>`).join("");
 $("#contact-card").innerHTML=`<p>Courriel : <a href="mailto:${PROFILE.email}">${PROFILE.email}</a></p><p>Ville : ${PROFILE.ville}</p><p><a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a></p>`;
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
