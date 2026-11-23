/* Accueil : ouverture noire (nom, grille de 16 pas, portrait), New Step, vidéos, grille jouable,
   méthodes, clinics et studio, scènes partagées, kit en plein écran, dates et appel final.
   Chaque section a au moins un effet visible au défilement ou qui bouge seul (contrôlé par l'audit). */
import { html } from '../../outils/gabarit.mjs';
import { listeDates, carteVideo, pas } from '../gabarits/outils-pages.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'portrait-caisse-claire-1280.webp' };

const LIGNES = [['ti', 'ligneTi'], ['ka', 'ligneKa'], ['koum', 'ligneKoum']];
const nomVoix = (s) => { const [a, b] = s.split(' · '); return b ? html`<b>${a}</b><span>${b}</span>` : html`<b>${a}</b>`; };

export default (c) => {
  const a = c.donnees.album;
  return html`
<section class="hero ecran theme-noir" id="debut">
  <span class="hero-halo" aria-hidden="true" data-audit-ignorer></span>
  <div class="hero-texte">
    <p class="surtitre hero-surtitre masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre titre-geant" data-anime="gsap">
      <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span>
      <span class="ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre2')}</span></span>
      <span class="ligne-masque ligne-masque--em"><em class="hero-ligne">${c.t('accueil.hero.titre3')}</em></span>
    </h1>
    <div class="hero-bas">
      <a class="pas-lien" href="#groove" aria-label="${c.s('accueil.hero.jouer')}">${pas('pas--hero', 'data-iris-centre data-effet="pas"')}<span class="pas-legende" aria-hidden="true">${c.t('accueil.hero.jouerCourt')}</span></a>
      <div class="hero-detail" data-anime="gsap">
        <p class="hero-intro masque-ecran-bas">${c.t('accueil.hero.texte')}</p>
        <p class="hero-info" data-info-cle>${c.t('accueil.hero.info')}</p>
        <p class="hero-actions">
          ${c.lien('musique', { ancre: 'album', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
          ${c.lien('contact', { ancre: 'demande', classe: 'bouton bouton--contour', texte: c.t('accueil.hero.engager') })}
        </p>
      </div>
    </div>
  </div>
  ${c.media({ nom: 'portrait-caisse-claire', alt: c.s('pages.accueil.partageAlt'), cadrage: '50% 40%', cadrageMobile: '50% 30%', priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
</section>

<section class="album section theme-pierre" id="album">
  <div class="conteneur album-grille">
    <div class="album-visuel">
      ${c.media({ nom: 'new-step-pochette', alt: c.s('accueil.album.alt'), classe: 'album-pochette', sizes: '(max-width: 760px) 60vw, 300px', ratio: '358 / 536', attrs: 'data-fx="zoom" data-fx-force="12"' })}
      <div class="album-quartet">
        <p class="surtitre">${c.t('accueil.album.quartet')}</p>
        <ul data-anime="cascade">${a.musiciens.map((m) => html`<li><strong>${m.nom}</strong> <span>${m.instrument}</span></li>`)}</ul>
      </div>
    </div>
    <div class="album-texte">
      <p class="surtitre">${c.t('accueil.album.surtitre')}</p>
      <h2 class="titre-geant" data-anime="lignes">${c.t('accueil.album.titre')}</h2>
      <p class="album-sous">${c.t('accueil.album.sous')}</p>
      <p data-anime>${c.t('accueil.album.texte')}</p>
      <p class="album-sortie">${c.t('accueil.album.sortie')}</p>
      <p class="actions">
        <a class="bouton" href="${c.site.ecoute.spotify}" target="_blank" rel="noopener" data-survol="magnetique">${c.t('accueil.album.spotify')}</a>
        <a class="bouton bouton--contour" href="${c.site.ecoute.plateformes}" target="_blank" rel="noopener">${c.t('accueil.album.plateformes')}</a>
      </p>
      <div class="titres-cadre"><span class="titres-tete" aria-hidden="true"></span><ol class="titres" data-effet="tete-de-lecture" aria-label="${c.s('accueil.album.titres')}">
        ${a.titres.map((t) => html`<li class="titre-piste"><span class="titre-n">${t.n}</span><span class="titre-nom">${t.titre}</span>${t.note ? html`<span class="titre-note">${t.note}</span>` : ''}<span class="titre-barres" aria-hidden="true"><i></i><i></i><i></i></span></li>`)}
      </ol></div>
      <p>${c.lien('musique', { classe: 'lien-fleche', texte: c.t('accueil.album.musique') })}</p>
    </div>
  </div>
</section>

<section class="videos section theme-noir" id="videos">
  <div class="conteneur videos-tete">
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.videos.titre')}</h2>
    <p>${c.t('accueil.videos.texte')}</p>
  </div>
  <div class="videos-fenetre" data-effet="rangee-video">
    <div class="videos-piste" data-galerie role="region" aria-label="${c.s('accueil.videos.region')}" tabindex="0">
      ${c.donnees.videos.map((v) => carteVideo(c, v, '(max-width: 760px) 80vw, 34vw'))}
    </div>
  </div>
  <p class="conteneur videos-lien"><a class="lien-fleche" href="${c.site.reseaux.find((r) => r.nom === 'YouTube').url}" target="_blank" rel="noopener">${c.t('accueil.videos.toutes')}</a></p>
</section>

<section class="groove section theme-pierre" id="groove">
  <div class="conteneur groove-grille">
    <div class="groove-texte">
      <p class="surtitre">${c.t('accueil.groove.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.groove.titre')}</h2>
      <p>${c.t('accueil.groove.texte')}</p>
      <div class="groove-commandes">
        <button type="button" class="bouton groove-lecture" data-groove-lecture aria-pressed="false" data-libelle-lecture="${c.s('accueil.groove.lecture')}" data-libelle-arret="${c.s('accueil.groove.arret')}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg><span data-libelle-bouton>${c.t('accueil.groove.lecture')}</span></button>
        <label class="groove-tempo"><span>${c.t('accueil.groove.tempo')} <output data-groove-bpm>90</output> <small>${c.t('accueil.groove.bpm')}</small></span><input type="range" min="65" max="100" value="90" step="1" data-groove-tempo></label>
      </div>
      <div class="groove-motifs" role="group" aria-label="${c.s('accueil.groove.motif')}">
        <button type="button" class="puce" data-groove-motif="basique" aria-pressed="true">${c.t('accueil.groove.motif1')}</button>
        <button type="button" class="puce" data-groove-motif="ghost" aria-pressed="false">${c.t('accueil.groove.motif2')}</button>
        <button type="button" class="puce" data-groove-motif="nola" aria-pressed="false">${c.t('accueil.groove.motif3')}</button>
        <button type="button" class="puce puce--discrete" data-groove-motif="vide" aria-pressed="false">${c.t('accueil.groove.effacer')}</button>
      </div>
      <p class="groove-son">${c.t('accueil.groove.son')}</p>
      <p class="visuellement-cache" role="status" data-groove-annonce data-lecture="${c.s('accueil.groove.annonceLecture')}" data-arret="${c.s('accueil.groove.annonceArret')}"></p>
    </div>
    <div class="groove-scene">
    <p class="groove-syllabe" aria-hidden="true" data-audit-ignorer><span data-syllabe>Koum</span></p>
    <div class="sequenceur" data-sequenceur data-effet="grille-groove" data-visuel data-grille="manipuler">
      ${[0, 1, 2, 3].map((t) => html`<div class="seq-temps">
        <span class="seq-temps-n" aria-hidden="true">${t + 1}</span>
        ${LIGNES.map(([id, cle]) => html`<div class="seq-ligne seq-ligne--${id}">
          <span class="seq-nom" aria-hidden="true">${nomVoix(c.s('accueil.groove.' + cle))}</span>
          ${[0, 1, 2, 3].map((d) => {
            const n = t * 4 + d;
            return html`<button type="button" class="seq-case" data-voix="${id}" data-pas="${n}" aria-pressed="false" aria-label="${c.s('accueil.groove.' + cle)}, ${c.s('accueil.groove.case', { n: n + 1 })}"></button>`;
          })}
        </div>`)}
      </div>`)}
    </div>
    </div>
  </div>
  <p class="conteneur groove-lien">${c.lien('methodes', { classe: 'lien-fleche', texte: c.t('accueil.groove.methodes') })}</p>
</section>

<section class="methodes-accueil section theme-noir" id="methodes">
  <div class="conteneur methodes-grille">
    <div>
      <p class="surtitre">${c.t('accueil.methodes.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.methodes.titre')}</h2>
      <p>${c.t('accueil.methodes.texte')}</p>
      <ul class="chiffres-liste" data-anime="cascade">
        <li><strong class="chiffre chiffre--plus" data-compteur="300">300</strong> <span>${c.t('accueil.methodes.c1')}</span></li>
        <li><strong class="chiffre" data-compteur="195">195</strong> <span>${c.t('accueil.methodes.c2')}</span></li>
        <li><strong class="chiffre" data-compteur="108">108</strong> <span>${c.t('accueil.methodes.c3')}</span></li>
      </ul>
      <p class="preuve">★ ${c.t('accueil.methodes.avis')}<br>${c.t('accueil.methodes.cmf')}</p>
      <p>${c.lien('methodes', { ancre: 'livres', classe: 'bouton', texte: c.t('accueil.methodes.voir'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <div class="couvertures" data-effet="couvertures">
      ${c.donnees.livres.map((l, i) => html`<a class="couverture couverture--${i + 1}" href="${c.url('methodes', 'livre-' + l.id)}" data-libelle="${c.libelle('methodes')}" aria-label="${l.titre}, ${l.prix} €">
        ${c.media({ nom: l.image, alt: '', classe: 'couverture-media', sizes: '(max-width: 760px) 40vw, 18vw', ratio: '707 / 1000' })}
        <span class="couverture-prix" data-prix>${l.prix} €</span>
      </a>`)}
    </div>
  </div>
</section>

<section class="clinics-accueil section theme-pierre" id="clinics">
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.clinics.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.clinics.titre')}</h2>
    <div class="deux-cartes">
      <article class="grande-carte">
        ${c.media({ nom: 'grok/clinic', alt: c.s('clinics.tete.alt'), classe: 'grande-carte-media', sizes: '(max-width: 760px) 100vw, 46vw', ratio: '16 / 10', cadrage: '60% 50%', attrs: 'data-fx="zoom"' })}
        <h3>${c.t('accueil.clinics.clinicTitre')}</h3>
        <p>${c.t('accueil.clinics.clinicTexte')}</p>
        <p>${c.lien('clinics', { ancre: 'organiser', classe: 'lien-fleche', texte: c.t('accueil.clinics.clinicLien') })}</p>
      </article>
      <article class="grande-carte">
        ${c.media({ nom: 'grok/studio', alt: c.s('clinics.studio.alt'), classe: 'grande-carte-media', sizes: '(max-width: 760px) 100vw, 46vw', ratio: '16 / 10', attrs: 'data-fx="zoom"' })}
        <h3>${c.t('accueil.clinics.studioTitre')}</h3>
        <p>${c.t('accueil.clinics.studioTexte')}</p>
        <p>${c.lien('clinics', { ancre: 'studio', classe: 'lien-fleche', texte: c.t('accueil.clinics.studioLien') })}</p>
      </article>
    </div>
    <p class="bandeau-info">${c.lien('clinics', { ancre: 'sessions', texte: c.t('accueil.clinics.sessions') })}</p>
  </div>
</section>

<section class="scenes section theme-noir" id="scenes">
  <div class="mots" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>Sonny Emory · Aaron Spears · Robert Sput · Benny Greb · Dave Weckl · Sonny Emory · Aaron Spears · Robert Sput ·</p>
    <p data-fx-rangee data-sens="-1">Moulin Rouge · Jazz in Marciac · Jazz Club Taquin · Sunset · Moulin Rouge · Jazz in Marciac ·</p>
  </div>
  <div class="conteneur scenes-grille">
    <div>
      <p class="surtitre">${c.t('accueil.scenes.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.scenes.titre')}</h2>
      <p>${c.t('accueil.scenes.texte')}</p>
      <p>${c.lien('bio', { ancre: 'parcours', classe: 'lien-fleche', texte: c.t('accueil.scenes.bio') })}</p>
    </div>
    ${c.media({ nom: 'live-club', alt: c.s('accueil.scenes.alt'), classe: 'scenes-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '16 / 9', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="kit theme-noir" id="kit" data-fx="plein-ecran" data-fx-depart="inset(16% 20% 16% 20% round 20px)" style="--fx-longueur: 190svh">
  <div data-collant>
    ${c.media({ nom: 'kit-red-oyster', alt: c.s('bio.materiel.alt'), classe: 'kit-media', sizes: '100vw', cadrage: '55% 50%', attrs: 'data-fx-cible' })}
    <p class="kit-mots" aria-hidden="true" data-audit-ignorer><span data-fx-ecarte="g">${c.t('accueil.kit.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.kit.mot2')}</span></p>
    <div class="kit-legende" data-fx-apres>
      <h2>${c.t('accueil.kit.titre')}</h2>
      <p>${c.t('accueil.kit.texte')}</p>
      <ul class="logos">${['sonor', 'zildjian', 'remo'].map((m) => html`<li>${c.media({ nom: 'logo-' + m, alt: m[0].toUpperCase() + m.slice(1), classe: 'logo-marque', sizes: '160px' })}</li>`)}</ul>
      <p>${c.lien('bio', { ancre: 'materiel', classe: 'lien-fleche', texte: c.t('accueil.kit.materiel') })}</p>
    </div>
  </div>
</section>

<section class="fin section theme-noir" id="dates">
  ${c.media({ nom: 'grok/club', alt: '', classe: 'fin-fond', sizes: '100vw', cadrage: '50% 60%', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur fin-contenu">
    <p class="surtitre">${c.t('accueil.fin.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.fin.titre')}</h2>
    <p class="fin-aucune">${c.t('accueil.fin.aucune')}</p>
    <p class="surtitre">${c.t('accueil.fin.dernieres')}</p>
    ${listeDates(c, c.donnees.dates)}
    <p class="actions">
      ${c.lien('contact', { ancre: 'demande', params: 'sujet=booking', classe: 'bouton', texte: c.t('accueil.fin.booking'), attrs: 'data-survol="magnetique"' })}
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton bouton--contour', texte: c.t('accueil.fin.engager') })}
    </p>
  </div>
</section>
`;
};
