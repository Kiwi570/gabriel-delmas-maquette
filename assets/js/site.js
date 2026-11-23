/* Effets propres à Gabriel Delmas. Le socle gère l'ouverture, les transitions, l'en-tête, le menu, les boucles,
   les mesures et la bibliothèque d'effets (posés par attributs dans les pages).
   Effets du plan (data-effet) : pas, tete-de-lecture, rangee-video, grille-groove, couvertures, eventail, frise. */
import { demarrer, boucle, versObjet, quand, aller, suivre, lacher } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const grand = () => window.matchMedia('(min-width: 761px)').matches;

/* ---------- Ouverture de chaque page : lignes du titre, surtitre et détails ---------- */
const OUVERTURE = { lignes: '.hero-ligne', autour: '.hero-surtitre, .hero-detail' };
function ouvrirPage(tl, t0) {
  if (!$(OUVERTURE.lignes)) return;
  tl.set('[data-anime="gsap"].hero-titre', { opacity: 1 }, 0);
  tl.fromTo(OUVERTURE.lignes, { y: 0, yPercent: 135 }, { y: 0, yPercent: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out' }, t0);
  if ($(OUVERTURE.autour)) tl.fromTo(OUVERTURE.autour, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' }, t0 + 0.2);
}

/* ---------- Pas : la grille de l'ouverture joue en silence ---------- */
const MOTIF_PAS = new Set([0, 3, 6, 8, 10, 12, 14]);
const BOUM = new Map([[0, 1], [6, 0.55], [8, 0.8], [10, 0.45]]);
function grillePas() {
  const el = $('.pas--hero');
  if (!el) return;
  const cases = $$('i', el);
  const halo = $('.hero-halo');
  let avant = -1;
  quand('pret', () => {
    boucle(el, (dt, t) => {
      const n = Math.floor(t * (96 / 60) * 4) % 16;
      if (n === avant) return;
      avant = n;
      cases.forEach((c, i) => {
        c.classList.toggle('tete', i === n);
        c.classList.toggle('on', MOTIF_PAS.has(i) && i <= n);
      });
      /* Le halo derrière le titre bat la grosse caisse du motif. */
      if (halo && BOUM.has(n) && gsap) gsap.fromTo(halo, { opacity: 0.25 + 0.6 * BOUM.get(n), scale: 1 + 0.06 * BOUM.get(n) }, { opacity: 0.12, scale: 1, duration: 0.55, ease: 'power2.out', overwrite: true });
    });
  });
}

/* ---------- Tête de lecture : la piste en cours suit le défilement ---------- */
function teteDeLecture() {
  $$('.titres').forEach((liste) => {
    const pistes = $$('.titre-piste', liste);
    if (!pistes.length || !ST()) return;
    let avant = -1, positions = [];
    const tete = liste.parentElement && liste.parentElement.querySelector('.titres-tete');
    const mesurer = () => { positions = pistes.map((li) => [li.offsetTop, li.offsetHeight]); };
    const poser = (p, force) => {
      const n = Math.min(pistes.length - 1, Math.max(0, Math.floor(p * pistes.length)));
      if (n === avant && !force) return;
      avant = n;
      pistes.forEach((li, i) => li.classList.toggle('joue', i === n));
      if (tete && positions[n] && gsap) gsap.to(tete, { y: positions[n][0], height: positions[n][1], duration: force ? 0 : 0.35, ease: 'power3.out', overwrite: true });
    };
    mesurer();
    ST().create({ trigger: liste, start: 'top 72%', end: 'bottom 40%', onUpdate: (s) => poser(s.progress), onRefresh: (s) => { mesurer(); poser(s.progress, true); } });
  });
}

/* ---------- Rangée de vidéos qui glisse pendant que la section passe (ordinateur) ---------- */
function rangeeVideo() {
  const fenetre = $('.videos-fenetre');
  const piste = fenetre && $('.videos-piste', fenetre);
  if (!piste || !gsap || !ST()) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    const distance = () => Math.max(0, piste.scrollWidth - fenetre.clientWidth);
    const tw = gsap.fromTo(piste, { x: 0 }, {
      x: () => -distance(), ease: 'none',
      scrollTrigger: { trigger: fenetre, start: 'top 85%', end: 'bottom 15%', scrub: 0.6, invalidateOnRefresh: true },
    });
    /* Au clavier, la vidéo qui reçoit le focus est amenée à l'écran. */
    const focus = (e) => {
      const carte = e.target.closest('.video');
      const st = tw.scrollTrigger;
      if (!carte || !st || !distance()) return;
      const centre = carte.offsetLeft + carte.offsetWidth / 2 - fenetre.clientWidth / 2;
      const p = Math.min(1, Math.max(0, centre / distance()));
      window.scrollTo(0, st.start + p * (st.end - st.start));
      fenetre.scrollLeft = 0;
    };
    piste.addEventListener('focusin', focus);
    return () => piste.removeEventListener('focusin', focus);
  });
}

/* ---------- Couvertures qui montent à des vitesses différentes ---------- */
function couvertures() {
  if (!gsap || !ST()) return;
  $$('.couvertures').forEach((bloc) => {
    $$('.couverture', bloc).forEach((c, i) => {
      gsap.fromTo(c, { y: 40 + i * 30, rotate: (i - 1) * 2.5 }, {
        y: -10 * i, rotate: 0, ease: 'none',
        scrollTrigger: { trigger: bloc, start: 'top bottom', end: 'bottom 30%', scrub: 0.5 },
      });
    });
  });
}

/* ---------- Éventail des couvertures (ouverture des méthodes) ---------- */
function eventail() {
  const bloc = $('.eventail');
  if (!bloc || !gsap || !ST()) return;
  const livres = $$('.eventail-livre', bloc);
  livres.forEach((l, i) => {
    const d = i - (livres.length - 1) / 2;
    gsap.fromTo(l, { rotate: d * 4, xPercent: d * 18 }, {
      rotate: d * 12, xPercent: d * 52, ease: 'none',
      scrollTrigger: { trigger: bloc, start: 'top 80%', end: 'bottom top', scrub: 0.5 },
    });
  });
}

/* ---------- Frise du parcours : le trait se trace au défilement ---------- */
function frise() {
  const f = $('.frise');
  if (!f || !gsap || !ST()) return;
  const trait = $('.frise-trait', f);
  gsap.fromTo(trait, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: f, start: 'top 70%', end: 'bottom 60%', scrub: 0.4 } });
  $$('.frise-point', f).forEach((p) => {
    ST().create({ trigger: p, start: 'top 68%', onEnter: () => p.classList.add('allume'), onLeaveBack: () => p.classList.remove('allume') });
  });
}

/* ---------- Dates : statut recalculé à la date du jour (heure de Paris) ---------- */
function dates() {
  const auj = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  $$('[data-date]').forEach((li) => {
    const passe = li.dataset.date < auj;
    li.classList.toggle('date--passee', passe);
    const s = $('[data-statut]', li);
    if (s) s.textContent = passe ? s.dataset.passe : s.dataset.avenir;
  });
}

/* ---------- Grille jouable : séquenceur de 16 pas, son synthétisé après un clic ---------- */
const MOTIFS = {
  basique: { ti: [0, 2, 4, 6, 8, 10, 12, 14], ka: [4, 12], koum: [0, 8, 10] },
  ghost: { ti: [0, 2, 4, 6, 8, 10, 12, 14], ka: [4, 7, 9, 12, 15], koum: [0, 3, 8, 10] },
  nola: { ti: [2, 6, 10, 14], ka: [4, 6, 11, 12, 14], koum: [0, 3, 7, 8, 11] },
  vide: { ti: [], ka: [], koum: [] },
};
function sequenceur() {
  const seq = $('[data-sequenceur]');
  if (!seq) return;
  const cases = $$('.seq-case', seq);
  const parPas = Array.from({ length: 16 }, (_, n) => cases.filter((c) => +c.dataset.pas === n));
  const bouton = $('[data-groove-lecture]'), tempo = $('[data-groove-tempo]'), sortie = $('[data-groove-bpm]');
  const annonce = $('[data-groove-annonce]');
  const motifs = $$('[data-groove-motif]');
  let bpm = +tempo.value, joue = false, ctx = null, maitre = null, bruit = null, prochain = 0, pasCourant = 0, minuterie = 0, tete = -1;

  const syllabe = $('[data-syllabe]');
  const temps = $$('.seq-temps-n', seq);
  const SYL = { koum: 'Koum', ka: 'Ka', ti: 'ts' };
  const chanter = (n) => {
    if (!syllabe) return;
    const actives = parPas[n].filter((c) => c.getAttribute('aria-pressed') === 'true').map((c) => c.dataset.voix);
    temps.forEach((t, i) => t.classList.toggle('allume', i === Math.floor(n / 4)));
    const v = actives.includes('koum') ? 'koum' : actives.includes('ka') ? 'ka' : actives.includes('ti') ? 'ti' : null;
    if (!v) return;
    syllabe.textContent = SYL[v];
    syllabe.dataset.voix = v;
    if (gsap) gsap.fromTo(syllabe, { scale: v === 'ti' ? 0.9 : 1.18, opacity: 1 }, { scale: 1, opacity: v === 'ti' ? 0.35 : 0.55, duration: 0.32, ease: 'power3.out', overwrite: true });
  };
  const appliquer = (nom) => {
    const m = MOTIFS[nom];
    cases.forEach((c) => c.setAttribute('aria-pressed', String(m[c.dataset.voix].includes(+c.dataset.pas))));
    motifs.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.grooveMotif === nom)));
  };
  appliquer('basique');
  motifs.forEach((b) => b.addEventListener('click', () => appliquer(b.dataset.grooveMotif)));
  cases.forEach((c) => c.addEventListener('click', async () => {
    const allume = c.getAttribute('aria-pressed') !== 'true';
    c.setAttribute('aria-pressed', String(allume));
    motifs.forEach((b) => b.setAttribute('aria-pressed', 'false'));
    /* Retour immédiat : une case qu'on allume joue son son (après ce clic, le navigateur autorise l'audio). */
    if (allume && !joue && preparerAudio()) {
      try { await ctx.resume(); } catch {}
      const t = ctx.currentTime + 0.01, v = c.dataset.voix, n = +c.dataset.pas;
      if (v === 'koum') koum(t); else if (v === 'ka') ka(t, n === 4 || n === 12 ? 1 : 0.28); else ti(t);
      c.classList.add('frappe'); setTimeout(() => c.classList.remove('frappe'), 90);
    }
  }));
  tempo.addEventListener('input', () => { bpm = +tempo.value; sortie.value = bpm; sortie.textContent = bpm; });

  const montrer = (n) => {
    if (n === tete) return;
    tete = n;
    cases.forEach((c) => c.classList.toggle('tete', +c.dataset.pas === n));
    chanter(n);
  };
  /* Démonstration muette tant que le visiteur n'a pas lancé la boucle : la tête de lecture avance seule. */
  boucle(seq, (dt, t) => { if (!joue) montrer(Math.floor(t * (bpm / 60) * 4) % 16); });

  const preparerAudio = () => {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    maitre = ctx.createGain(); maitre.gain.value = 0.7; maitre.connect(ctx.destination);
    bruit = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = bruit.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return ctx;
  };
  const sourceBruit = (t, duree) => { const s = ctx.createBufferSource(); s.buffer = bruit; s.start(t); s.stop(t + duree); return s; };
  const koum = (t) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.32);
    g.gain.setValueAtTime(1, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
    o.connect(g).connect(maitre); o.start(t); o.stop(t + 0.4);
  };
  const ka = (t, v) => {
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1900; f.Q.value = 0.7;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.75 * v, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
    sourceBruit(t, 0.18).connect(f).connect(g).connect(maitre);
    const o = ctx.createOscillator(), g2 = ctx.createGain();
    o.frequency.value = 190; g2.gain.setValueAtTime(0.35 * v, t); g2.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    o.connect(g2).connect(maitre); o.start(t); o.stop(t + 0.1);
  };
  const ti = (t) => {
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.22, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    sourceBruit(t, 0.06).connect(f).connect(g).connect(maitre);
  };
  const jouerPas = (n, t) => {
    parPas[n].forEach((c) => {
      if (c.getAttribute('aria-pressed') !== 'true') return;
      const v = c.dataset.voix;
      if (v === 'koum') koum(t);
      else if (v === 'ka') ka(t, n === 4 || n === 12 ? 1 : 0.28);
      else ti(t);
    });
    const delai = Math.max(0, (t - ctx.currentTime) * 1000);
    setTimeout(() => { if (!joue) return; montrer(n); parPas[n].forEach((c) => { if (c.getAttribute('aria-pressed') === 'true') { c.classList.add('frappe'); setTimeout(() => c.classList.remove('frappe'), 90); } }); }, delai);
  };
  const planifier = () => {
    while (prochain < ctx.currentTime + 0.12) {
      jouerPas(pasCourant, prochain);
      prochain += 60 / bpm / 4;
      pasCourant = (pasCourant + 1) % 16;
    }
    minuterie = setTimeout(planifier, 25);
  };
  const libelle = (lecture) => { $('[data-libelle-bouton]', bouton).textContent = lecture ? bouton.dataset.libelleArret : bouton.dataset.libelleLecture; };
  const arreter = () => {
    joue = false; clearTimeout(minuterie);
    bouton.setAttribute('aria-pressed', 'false'); libelle(false);
    if (annonce) annonce.textContent = annonce.dataset.arret;
  };
  bouton.addEventListener('click', async () => {
    if (joue) return arreter();
    if (!preparerAudio()) return;
    try { await ctx.resume(); } catch {}
    joue = true; pasCourant = 0; prochain = ctx.currentTime + 0.05;
    bouton.setAttribute('aria-pressed', 'true'); libelle(true);
    if (annonce) annonce.textContent = annonce.dataset.lecture;
    planifier();
  });
  /* La boucle s'arrête si le visiteur quitte la section ou la page. */
  if (ST()) ST().create({ trigger: seq, start: 'top bottom', end: 'bottom top', onLeave: () => joue && arreter(), onLeaveBack: () => joue && arreter() });
  document.addEventListener('visibilitychange', () => { if (document.hidden && joue) arreter(); });
  window.addEventListener('pagehide', () => { if (joue) arreter(); });
}

/* ---------- Visionneuse des pages de méthode ---------- */
function visionneuse() {
  const boite = $('[data-visionneuse]');
  const vignettes = $$('[data-page-livre]');
  if (!boite || !vignettes.length) return;
  const img = $('img', boite), legende = $('[data-visionneuse-legende]', boite);
  let n = 0, retour = null;
  const montrer = (i) => {
    n = (i + vignettes.length) % vignettes.length;
    const v = vignettes[n];
    img.src = v.dataset.grande; img.alt = v.dataset.alt; legende.textContent = v.dataset.alt;
  };
  const fermer = () => {
    boite.hidden = true; document.documentElement.classList.remove('visionneuse-ouverte');
    try { lacher(boite); } catch {}
    if (retour) retour.focus();
  };
  vignettes.forEach((v, i) => v.addEventListener('click', () => {
    retour = v; montrer(i); boite.hidden = false; document.documentElement.classList.add('visionneuse-ouverte');
    try { suivre(boite); } catch {}
    $('[data-visionneuse-fermer]', boite).focus();
  }));
  $('[data-visionneuse-fermer]', boite).addEventListener('click', fermer);
  $('[data-visionneuse-precedent]', boite).addEventListener('click', () => montrer(n - 1));
  $('[data-visionneuse-suivant]', boite).addEventListener('click', () => montrer(n + 1));
  boite.addEventListener('click', (e) => { if (e.target === boite) fermer(); });
  boite.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fermer();
    else if (e.key === 'ArrowLeft') montrer(n - 1);
    else if (e.key === 'ArrowRight') montrer(n + 1);
    else if (e.key === 'Tab') {
      const f = $$('button', boite); const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  let x0 = null;
  boite.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  boite.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) montrer(n + (dx < 0 ? 1 : -1)); x0 = null; }, { passive: true });
}

/* ---------- Modules de la bibliothèque : panier en tiroir, formulaire par étapes ---------- */
async function modules() {
  const v = document.documentElement.dataset.v || '1';
  const blocs = $$('[data-module="panier-en-tiroir"]');
  if (blocs.length) {
    try { const m = await import(`./modules/panier-en-tiroir/module.js?v=${v}`); for (const b of blocs) await m.init(b); } catch (err) { console.error('[site] panier', err); }
  }
  const form = $('[data-module="formulaire-par-etapes"]');
  if (form) {
    try {
      const m = await import(`./modules/formulaire-par-etapes/module.js?v=${v}`);
      /* Choix déjà fait selon le bouton d'où l'on vient (?sujet=booking, clinic, studio…). */
      const sujet = new URLSearchParams(location.search).get('sujet');
      const choix = sujet && form.querySelector(`input[name="projet"][value="${CSS.escape(sujet)}"]`);
      if (choix) choix.checked = true;
      let messages = {};
      try { messages = JSON.parse(form.dataset.messages || '{}'); } catch {}
      await m.init(form, { mailto: form.dataset.mailto || '', sujet: form.dataset.sujet || '', messages });
      form.addEventListener('formulaire:envoye', () => {
        const fin = form.querySelector('.fpe__fin');
        if (fin) setTimeout(() => aller(fin), 60);
      });
    } catch (err) { console.error('[site] formulaire', err); }
  }
}

demarrer({
  preparer() {
    grillePas();
    teteDeLecture();
    rangeeVideo();
    couvertures();
    eventail();
    frise();
    dates();
    sequenceur();
    visionneuse();
    modules();
  },
  /* Intro (environ 2,4 s) : 16 pas s'allument sur 4 temps, le nom tombe sur les temps 1 et 2,
     puis la grille glisse jusqu'à l'objet d'ouverture de la page et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const cases = $$('.pas--intro i');
    const mots = $$('.ouverture-mot');
    const pasDuree = 0.062;
    cases.forEach((el, i) => {
      tl.call(() => {
        cases.forEach((c) => c.classList.remove('tete'));
        el.classList.add('tete');
        if (i % 4 === 0) el.classList.add('on');
      }, null, 0.08 + i * pasDuree);
    });
    if (mots[0]) tl.fromTo(mots[0], { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.32, ease: 'back.out(2)' }, 0.08);
    if (mots[1]) tl.fromTo(mots[1], { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.32, ease: 'back.out(2)' }, 0.08 + 4 * pasDuree);
    tl.fromTo('.ouverture-ligne', { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0.08 + 8 * pasDuree)
      .call(() => cases.forEach((c) => { c.classList.remove('tete'); c.classList.add('on'); }), null, 0.08 + 12 * pasDuree)
      .to('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: -18, duration: 0.28, ease: 'power2.in' }, 1.12);
    versObjet(tl, { a: 1.15, duree: 0.5, ouverture: 0.72 });
    ouvrirPage(tl, 1.6);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('[data-anime="gsap"].hero-titre', { opacity: 1 });
    gsap.set(OUVERTURE.lignes, { y: 0, yPercent: 0 });
    gsap.set(OUVERTURE.autour, { opacity: 1, y: 0 });
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline({ delay: 0.12 });
    ouvrirPage(tl, 0);
  },
});
