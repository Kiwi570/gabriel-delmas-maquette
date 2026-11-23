/* Musique : « NEW STEP » en très grand sur la pierre et le quartet en grand, les onze titres,
   le quartet, les vidéos, les dates et le booking. */
import { html } from '../../outils/gabarit.mjs';
import { listeDates, carteVideo } from '../gabarits/outils-pages.mjs';

export const page = { cle: 'musique', fichier: 'musique', imagePartage: 'quartet-1280.webp' };

export default (c) => {
  const a = c.donnees.album;
  return html`
<section class="tete-album ecran theme-pierre" id="debut">
  <div class="conteneur tete-album-grille">
    <div class="tete-album-texte">
      <p class="surtitre hero-surtitre" data-anime="gsap">${c.t('musique.tete.surtitre')}</p>
      <h1 class="titre-geant hero-titre tete-album-titre" data-anime="gsap">
        <span class="ligne-masque"><span class="hero-ligne">${c.t('musique.tete.titre1')}</span></span>
        <span class="ligne-masque"><span class="hero-ligne">${c.t('musique.tete.titre2')}</span></span>
      </h1>
      <div class="hero-detail" data-anime="gsap">
        <p class="masque-ecran-bas">${c.t('musique.tete.texte')}</p>
        <p class="hero-info" data-info-cle>${c.t('musique.tete.info')}</p>
        <p class="actions">
          <a class="bouton" href="${c.site.ecoute.plateformes}" target="_blank" rel="noopener" data-action-principale data-survol="magnetique">${c.t('musique.tete.ecouter')}</a>
          ${c.lien('contact', { ancre: 'demande', params: 'sujet=booking', classe: 'bouton bouton--contour', texte: c.t('musique.tete.booking') })}
        </p>
      </div>
    </div>
    ${c.media({ nom: 'quartet', alt: c.s('musique.tete.alt'), priorite: true, classe: 'tete-album-media', sizes: '(max-width: 760px) 100vw, 55vw', cadrage: '50% 55%', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  </div>
</section>

<section class="album-titres section theme-noir" id="album">
  <div class="conteneur album-grille">
    <div class="album-visuel">
      ${c.media({ nom: 'new-step-pochette', alt: c.s('accueil.album.alt'), classe: 'album-pochette', sizes: '(max-width: 760px) 60vw, 300px', ratio: '358 / 536', attrs: 'data-fx="zoom" data-fx-force="12"' })}
      <p class="album-sortie">${c.t('accueil.album.sortie')}</p>
      <p class="actions">
        <a class="bouton" href="${c.site.ecoute.spotify}" target="_blank" rel="noopener">${c.t('musique.titres.spotify')}</a>
      </p>
    </div>
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('musique.titres.titre')}</h2>
      <p>${c.t('musique.titres.texte')}</p>
      <ol class="titres" data-effet="tete-de-lecture" aria-label="${c.s('accueil.album.titres')}">
        ${a.titres.map((t) => html`<li class="titre-piste"><span class="titre-n">${t.n}</span><span class="titre-nom">${t.titre}</span>${t.note ? html`<span class="titre-note">${t.note}</span>` : ''}${t.video ? html`<a class="titre-video" href="https://www.youtube.com/watch?v=${t.video}" target="_blank" rel="noopener" aria-label="${t.titre} : ${c.s('musique.titres.video')}, ${c.s('commun.nouvelOnglet')}">${c.t('musique.titres.video')}</a>` : html`<span class="titre-barres" aria-hidden="true"><i></i><i></i><i></i></span>`}</li>`)}
      </ol>
      <p class="influences">${c.t('musique.titres.influences')}</p>
    </div>
  </div>
</section>

<section class="quartet section theme-pierre" id="quartet">
  <div class="conteneur quartet-grille">
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('musique.quartet.titre')}</h2>
      <p>${c.t('musique.quartet.texte')}</p>
      <ul class="musiciens" data-anime="cascade">${a.musiciens.map((m, i) => html`<li><span class="musicien-n">0${i + 1}</span><strong>${m.nom}</strong><span>${m.instrument}</span></li>`)}</ul>
    </div>
    ${c.media({ nom: 'seance-studio', alt: c.s('musique.quartet.alt'), classe: 'quartet-media', sizes: '(max-width: 760px) 100vw, 45vw', ratio: '16 / 9', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="videos-grille section theme-noir" id="videos">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('musique.videos.titre')}</h2>
    <div class="grille-videos" data-anime="cascade">${c.donnees.videos.map((v) => carteVideo(c, v, '(max-width: 760px) 100vw, 30vw'))}</div>
    <p><a class="lien-fleche" href="${c.site.reseaux.find((r) => r.nom === 'YouTube').url}" target="_blank" rel="noopener">${c.t('musique.videos.toutes')}</a></p>
  </div>
</section>

<section class="fin section theme-noir" id="dates">
  ${c.media({ nom: 'grok/club', alt: '', classe: 'fin-fond', sizes: '100vw', cadrage: '50% 60%', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur fin-contenu">
    <h2 class="titre-section" data-anime="lignes">${c.t('musique.dates.titre')}</h2>
    <p class="fin-aucune">${c.t('musique.dates.aucune')}</p>
    <p class="surtitre">${c.t('musique.dates.passees')}</p>
    ${listeDates(c, c.donnees.dates)}
    <div class="booking">
      <p class="surtitre">${c.t('musique.dates.booking')}</p>
      <p>${c.t('musique.dates.bookingTexte')}<br><a class="email" href="mailto:${c.site.contact.emailTrio}">${c.site.contact.emailTrio}</a></p>
      <p>${c.lien('contact', { ancre: 'demande', params: 'sujet=booking', classe: 'bouton', texte: c.t('musique.dates.bookingAction'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
  </div>
</section>
`;
};
