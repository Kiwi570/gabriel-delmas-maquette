/* Bio & matériel : studio gris plein cadre, frise du parcours, scènes partagées, le kit pièce par pièce. */
import { html } from '../../outils/gabarit.mjs';
import { carteVideo } from '../gabarits/outils-pages.mjs';

export const page = { cle: 'bio', fichier: 'bio', imagePartage: 'studio-gris-1280.webp' };

const SCENES = ['Sonny Emory', 'Aaron Spears', 'Robert Sput', 'Benny Greb', 'Dave Weckl', 'Tony Royster', 'Damien Schmitt'];
const TAQUIN = ['Sylvain Gontard', 'Nicolas Folmer', 'Tom Ibarra', 'Emeline Fougeray', 'Stéphane Guillaume', 'Gaël Horellou', 'Guillaume Farley', 'Laurent Coulondre', 'Pierre Lapprand'];

export default (c) => html`
<section class="tete-plein tete-plein--clair ecran theme-noir" id="debut">
  ${c.media({ nom: 'studio-gris', alt: c.s('bio.tete.alt'), priorite: true, classe: 'tete-plein-media', sizes: '100vw', cadrage: '50% 62%', cadrageMobile: '46% 50%', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur tete-plein-texte">
    <p class="surtitre hero-surtitre" data-anime="gsap">${c.t('bio.tete.surtitre')}</p>
    <h1 class="titre-geant hero-titre" data-anime="gsap">
      <span class="ligne-masque"><span class="hero-ligne">${c.t('bio.tete.titre1')}</span></span>
      <span class="ligne-masque"><span class="hero-ligne hero-ligne--rouge">${c.t('bio.tete.titre2')}</span></span>
    </h1>
    <div class="hero-detail" data-anime="gsap">
      <p class="masque-ecran-bas">${c.t('bio.tete.texte')}</p>
      <p class="hero-info" data-info-cle>${c.t('bio.tete.info')}</p>
      <p class="actions"><a class="bouton" href="#parcours" data-action-principale data-survol="magnetique">${c.t('bio.tete.action')}</a></p>
    </div>
  </div>
</section>

<section class="parcours section theme-pierre" id="parcours">
  <div class="conteneur parcours-grille">
    <div class="parcours-tete">
      <h2 class="titre-section" data-anime="lignes">${c.t('bio.parcours.titre')}</h2>
      ${c.media({ nom: 'portrait-exterieur', alt: c.s('contact.tete.alt'), classe: 'parcours-media', sizes: '(max-width: 760px) 100vw, 30vw', ratio: '4 / 5', cadrage: '50% 40%', attrs: 'data-anime="rideau"' })}
    </div>
    <div class="frise" data-effet="frise">
      <span class="frise-trait" aria-hidden="true"></span>
      <ol>${c.donnees.parcours.map((p) => html`<li class="frise-point"><span class="frise-quand">${p.quand}</span><p>${p.texte}</p></li>`)}</ol>
    </div>
  </div>
</section>

<section class="partage section theme-noir" id="scenes">
  <div class="conteneur partage-grille">
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('bio.scenes.titre')}</h2>
      <p>${c.t('bio.scenes.texte')}</p>
      <ul class="noms noms--grands" data-anime="cascade">${SCENES.map((n) => html`<li>${n}</li>`)}</ul>
      <p>${c.t('bio.scenes.taquin')}</p>
      <ul class="noms" data-anime="cascade">${TAQUIN.map((n) => html`<li>${n}</li>`)}</ul>
    </div>
    ${c.media({ nom: 'live-club', alt: c.s('accueil.scenes.alt'), classe: 'partage-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '16 / 9', attrs: 'data-fx="zoom"' })}
  </div>
</section>

<section class="materiel section theme-pierre" id="materiel">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('bio.materiel.titre')}</h2>
    <p class="materiel-intro">${c.t('bio.materiel.texte')}</p>
    ${c.media({ nom: 'kit-red-oyster', alt: c.s('bio.materiel.alt'), classe: 'materiel-media', sizes: '(max-width: 760px) 100vw, 90vw', ratio: '16 / 9', cadrage: '55% 45%', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <div class="marques" data-anime="cascade">
      ${c.donnees.materiel.map((m) => html`<article class="marque-bloc">
        <div class="marque-logo">${c.media({ nom: 'logo-' + m.marque.toLowerCase(), alt: m.marque, classe: 'logo-marque logo-marque--sombre', sizes: '160px' })}</div>
        <p class="surtitre">${m.role}</p>
        <ul>${m.pieces.map((x) => html`<li>${x}</li>`)}</ul>
        ${m.url ? html`<p><a class="lien-fleche" href="${m.url}" target="_blank" rel="noopener">${c.t('bio.materiel.page')} ${m.marque}</a></p>` : ''}
      </article>`)}
    </div>
    <div class="unboxing">
      ${carteVideo(c, { url: c.site.reseaux.find((r) => r.nom === 'YouTube').url, image: 'video-unboxing-sq2', titre: 'Unboxing SQ²', detail: c.s('bio.materiel.unboxing') }, '(max-width: 760px) 100vw, 36vw')}
      <div>
        <h3>${c.t('bio.fin.titre')}</h3>
        <p>${c.t('bio.fin.texte')}</p>
        <p>${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('bio.fin.action'), attrs: 'data-survol="magnetique"' })}</p>
      </div>
    </div>
  </div>
</section>
`;
