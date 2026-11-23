/* Méthodes (boutique) : portrait au pad et couvertures en éventail, trois fiches complètes avec panier simulé,
   pages à feuilleter dans une visionneuse, comment travailler, écoles et livraison. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'methodes', fichier: 'methodes', imagePartage: 'portrait-pad-1280.webp' };

const PAGES = [
  { nom: 'rythme-interieur-sommaire', livre: 'Le Rythme Intérieur', alt: { fr: 'Le Rythme Intérieur : le sommaire', en: 'Le Rythme Intérieur: contents' } },
  { nom: 'rythme-interieur-page', livre: 'Le Rythme Intérieur', alt: { fr: 'Le Rythme Intérieur : travail mains et voix', en: 'Le Rythme Intérieur: hands and voice' } },
  { nom: 'rythme-interieur-dos', livre: 'Le Rythme Intérieur', alt: { fr: 'Le Rythme Intérieur : quatrième de couverture', en: 'Le Rythme Intérieur: back cover' } },
  { nom: 'pad-vers-groove-page', livre: 'Du Pad vers le Groove', alt: { fr: 'Du Pad vers le Groove : « Koum » et « Ka »', en: 'Du Pad vers le Groove: "Koum" and "Ka"' } },
  { nom: 'pad-vers-groove-dos', livre: 'Du Pad vers le Groove', alt: { fr: 'Du Pad vers le Groove : quatrième de couverture', en: 'Du Pad vers le Groove: back cover' } },
  { nom: 'from-pad-to-groove-dos', livre: 'From Pad To Groove', alt: { fr: 'From Pad To Groove : quatrième de couverture', en: 'From Pad To Groove: back cover' } },
];

export default (c) => html`
<section class="tete-scindee ecran theme-noir" id="debut">
  <div class="conteneur tete-scindee-grille">
    <div class="tete-scindee-texte">
      <p class="surtitre hero-surtitre" data-anime="gsap">${c.t('methodes.tete.surtitre')}</p>
      <h1 class="titre-geant hero-titre" data-anime="gsap">
        <span class="ligne-masque"><span class="hero-ligne">${c.t('methodes.tete.titre1')}</span></span>
        <span class="ligne-masque"><span class="hero-ligne hero-ligne--rouge">${c.t('methodes.tete.titre2')}</span></span>
      </h1>
      <div class="hero-detail" data-anime="gsap">
        <p class="masque-ecran-bas">${c.t('methodes.tete.texte')}</p>
        <p class="hero-info" data-info-cle>${c.t('methodes.tete.info')}</p>
        <p class="actions"><a class="bouton" href="#livres" data-action-principale data-survol="magnetique">${c.t('methodes.tete.action')}</a></p>
      </div>
    </div>
    <div class="tete-scindee-visuel">
      ${c.media({ nom: 'portrait-pad', alt: c.s('methodes.tete.alt'), priorite: true, classe: 'tete-portrait', sizes: '(max-width: 760px) 100vw, 40vw', cadrage: '50% 35%', attrs: 'data-iris-centre' })}
      <div class="eventail" data-effet="eventail" aria-hidden="true">
        ${c.donnees.livres.map((l) => html`<span class="eventail-livre">${c.media({ nom: l.image, alt: '', classe: 'eventail-media', sizes: '160px', ratio: '707 / 1000' })}</span>`)}
      </div>
    </div>
  </div>
</section>

<section class="livres section theme-pierre" id="livres">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('methodes.livres.titre')}</h2>
    <div class="livres-liste">
      ${c.donnees.livres.map((l) => html`<article class="livre" id="livre-${l.id}" data-panier-produit>
        <div class="livre-couverture">
          ${c.media({ nom: l.image, alt: l.titre, classe: 'livre-media', sizes: '(max-width: 760px) 70vw, 26vw', ratio: '707 / 1000', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
        </div>
        <div class="livre-texte">
          <p class="surtitre">${l.format} · ${l.annee}</p>
          <h3>${l.titre}</h3>
          <p class="livre-accroche">${l.accroche}</p>
          <p class="livre-chiffre">${l.chiffre}</p>
          ${l.avis ? html`<p class="livre-avis">★★★★★ ${c.t('methodes.livres.avis', { note: l.avis.note, nombre: l.avis.nombre })}</p>` : ''}
          ${l.distinction ? html`<p class="livre-distinction">${l.distinction}</p>` : ''}
          <dl class="livre-details">
            <div><dt>${c.t('methodes.livres.pour')}</dt><dd>${l.niveau}</dd></div>
            <div><dt>${c.t('methodes.livres.contenu')}</dt><dd><ul>${l.contenu.map((x) => html`<li>${x}</li>`)}</ul></dd></div>
          </dl>
          <div class="livre-achat">
            <p class="livre-prix" data-prix>${l.prix} €</p>
            <p class="livre-dispo">${l.dispo}</p>
            <a class="bouton" href="${c.url('contact', 'demande', 'sujet=methodes')}" data-sans-transition data-panier-ajouter="${l.id}" data-nom="${l.titre}" data-prix="${l.prix}" data-image="/assets/images/${l.image}-800.webp" data-options='${JSON.stringify({ Format: l.format })}'>${c.t('methodes.livres.ajouter')}</a>
          </div>
        </div>
      </article>`)}
    </div>
    <ul class="conditions">
      <li>${c.t('methodes.livres.livraison')}</li>
      <li>${c.t('methodes.livres.ecoles')}</li>
    </ul>
  </div>
</section>

<section class="feuilleter section theme-noir" id="feuilleter">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('methodes.feuilleter.titre')}</h2>
    <p>${c.t('methodes.feuilleter.texte')}</p>
    <ul class="pages-livre">
      ${PAGES.map((p) => { const alt = c.loc(p.alt); return html`<li><button type="button" class="page-livre" data-page-livre data-grande="/assets/images/${p.nom}-800.webp" data-alt="${alt}" aria-label="${c.s('methodes.feuilleter.ouvrir', { titre: alt })}">
        ${c.media({ nom: p.nom, alt: '', classe: 'page-livre-media', sizes: '(max-width: 760px) 45vw, 15vw', ratio: '707 / 1000', attrs: 'data-fx="vitesse" data-fx-force="3"' })}
        <span>${p.livre}</span>
      </button></li>`; })}
    </ul>
  </div>
  <div class="visionneuse" data-visionneuse data-recouvrement role="dialog" aria-modal="true" aria-label="${c.s('methodes.feuilleter.titre')}" hidden>
    <figure class="visionneuse-cadre"><img src="/assets/images/rythme-interieur-sommaire-800.webp" alt="" width="800" height="1036"><figcaption data-visionneuse-legende></figcaption></figure>
    <button type="button" class="visionneuse-bouton visionneuse-fermer" data-visionneuse-fermer>${c.t('methodes.feuilleter.fermer')}</button>
    <button type="button" class="visionneuse-bouton visionneuse-precedent" data-visionneuse-precedent aria-label="${c.s('methodes.feuilleter.precedent')}">←</button>
    <button type="button" class="visionneuse-bouton visionneuse-suivant" data-visionneuse-suivant aria-label="${c.s('methodes.feuilleter.suivant')}">→</button>
  </div>
</section>

<section class="travailler section theme-pierre" id="travailler">
  <div class="conteneur travailler-grille">
    ${c.media({ nom: 'grok/pad-metronome', alt: c.s('methodes.travailler.alt'), classe: 'travailler-media', sizes: '(max-width: 760px) 100vw, 46vw', ratio: '3 / 2', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('methodes.travailler.titre')}</h2>
      <ol class="etapes" data-anime="cascade">
        ${[1, 2, 3].map((n) => html`<li><span class="etape-n">0${n}</span><h3>${c.t('methodes.travailler.e' + n)}</h3><p>${c.t('methodes.travailler.t' + n)}</p></li>`)}
      </ol>
      <div class="question" id="question">
        <h3>${c.t('methodes.fin.titre')}</h3>
        <p>${c.t('methodes.fin.texte')}</p>
        <p>${c.lien('contact', { ancre: 'demande', params: 'sujet=methodes', classe: 'bouton', texte: c.t('methodes.fin.action'), attrs: 'data-survol="magnetique"' })}</p>
      </div>
    </div>
  </div>
</section>


`;
