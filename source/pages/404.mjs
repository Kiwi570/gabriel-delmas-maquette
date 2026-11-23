/* Page 404 : une baguette oubliée sur une scène vide. Une seule version (langue par défaut). */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="tete-plein ecran theme-noir introuvable" id="debut">
  ${c.media({ nom: 'grok/scene-404', alt: c.s('introuvable.alt'), priorite: true, classe: 'tete-plein-media', sizes: '100vw', cadrage: '50% 70%', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur tete-plein-texte">
    <p class="surtitre hero-surtitre" data-anime="gsap">404</p>
    <h1 class="titre-geant hero-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.t('introuvable.titre')}</span></span></h1>
    <div class="hero-detail" data-anime="gsap">
      <p>${c.t('introuvable.texte')}</p>
      <p class="actions">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
      <p class="hero-info" data-info-cle>${c.t('commun.ecouter')} : ${c.lien('musique', { ancre: 'album', texte: c.t('pages.musique.nav') })}</p>
    </div>
  </div>
</section>
`;
