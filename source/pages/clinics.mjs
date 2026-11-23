/* Clinics & studio : clinic plein cadre, trois thèmes, organiser, sessions intensives, batterie à distance, cours. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'clinics', fichier: 'clinics-et-studio', imagePartage: 'grok/clinic-1280.webp' };

const ICONES = {
  1: html`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6v8M24 34v8M6 24h8M34 24h8M11 11l6 6M31 31l6 6M37 11l-6 6M17 31l-6 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/><circle cx="24" cy="24" r="5" fill="currentColor"/></svg>`,
  2: html`<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M4 30c4 0 4-12 8-12s4 12 8 12 4-20 8-20 4 20 8 20 4-8 8-8" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  3: html`<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="10" width="32" height="30" rx="3" stroke="currentColor" stroke-width="3" fill="none"/><path d="M8 18h32M16 6v8M32 6v8M15 26h6M27 26h6M15 33h6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>`,
};

export default (c) => html`
<section class="tete-plein ecran theme-noir" id="debut">
  ${c.media({ nom: 'grok/clinic', alt: c.s('clinics.tete.alt'), priorite: true, classe: 'tete-plein-media', sizes: '100vw', cadrage: '62% 50%', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  <div class="conteneur tete-plein-texte">
    <p class="surtitre hero-surtitre" data-anime="gsap">${c.t('clinics.tete.surtitre')}</p>
    <h1 class="titre-geant hero-titre" data-anime="gsap">
      <span class="ligne-masque"><span class="hero-ligne">${c.t('clinics.tete.titre1')}</span></span>
      <span class="ligne-masque"><span class="hero-ligne hero-ligne--rouge">${c.t('clinics.tete.titre2')}</span></span>
    </h1>
    <div class="hero-detail" data-anime="gsap">
      <p class="masque-ecran-bas">${c.t('clinics.tete.texte')}</p>
      <p class="hero-info" data-info-cle>${c.t('clinics.tete.info')}</p>
      <p class="actions">
        <a class="bouton" href="#organiser" data-action-principale data-survol="magnetique">${c.t('clinics.tete.action')}</a>
        <a class="bouton bouton--contour" href="#studio">${c.t('clinics.studio.l1')}</a>
      </p>
    </div>
  </div>
</section>

<section class="themes section theme-pierre" id="themes">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('clinics.themes.titre')}</h2>
    <p class="themes-intro">${c.t('clinics.themes.texte')}</p>
    <ul class="cartes-themes" data-anime="cascade" data-visuel>
      ${[1, 2, 3].map((n) => html`<li class="carte-theme"><span class="carte-theme-icone">${ICONES[n]}</span><span class="carte-theme-n">0${n}</span><h3>${c.t('clinics.themes.t' + n)}</h3><p>${c.t('clinics.themes.x' + n)}</p></li>`)}
    </ul>
  </div>
</section>

<section class="organiser section theme-noir" id="organiser">
  <div class="conteneur organiser-grille">
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('clinics.organiser.titre')}</h2>
      <p>${c.t('clinics.organiser.texte')}</p>
      <dl class="contacts">
        <div><dt>${c.t('clinics.organiser.gabriel')}</dt><dd><a class="email" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></dd></div>
        <div><dt>${c.t('clinics.organiser.sonor')}</dt><dd><a class="email" href="mailto:${c.site.contact.emailSonor}">${c.site.contact.emailSonor}</a></dd></div>
      </dl>
      <p>${c.lien('contact', { ancre: 'demande', params: 'sujet=clinic', classe: 'bouton', texte: c.t('clinics.organiser.action'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    ${c.media({ nom: 'portrait-caisse-claire', alt: c.s('pages.accueil.partageAlt'), classe: 'organiser-media', sizes: '(max-width: 760px) 100vw, 36vw', ratio: '4 / 5', cadrage: '50% 35%', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="sessions section theme-pierre" id="sessions">
  <div class="conteneur sessions-grille">
    ${c.media({ nom: 'grok/sessions', alt: c.s('clinics.sessions.alt'), classe: 'sessions-media', sizes: '(max-width: 760px) 100vw, 50vw', ratio: '3 / 2', attrs: 'data-fx="zoom"' })}
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('clinics.sessions.titre')}</h2>
      <p>${c.t('clinics.sessions.texte')}</p>
      <ul class="liste-faits" data-anime="cascade">${[1, 2, 3, 4, 5].map((n) => html`<li>${c.t('clinics.sessions.l' + n)}</li>`)}</ul>
      <p class="petit">${c.t('clinics.sessions.tarif')}</p>
      <p class="actions">
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=cours', classe: 'bouton', texte: c.t('clinics.sessions.action') })}
        ${c.lien('contact', { ancre: 'demande', params: 'sujet=cours', classe: 'bouton bouton--contour', texte: c.t('clinics.cours.action') })}
      </p>
      <p class="petit">${c.t('clinics.cours.titre')} : ${c.t('clinics.cours.texte')}</p>
    </div>
  </div>
</section>

<section class="studio section theme-noir" id="studio">
  <div class="conteneur studio-grille">
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('clinics.studio.titre')}</h2>
      <p>${c.t('clinics.studio.texte')}</p>
      <ul class="liste-faits liste-faits--clair" data-anime="cascade">${[1, 2, 3].map((n) => html`<li>${c.t('clinics.studio.l' + n)}</li>`)}</ul>
      <p>${c.lien('contact', { ancre: 'demande', params: 'sujet=studio', classe: 'bouton', texte: c.t('clinics.studio.action'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <div class="studio-images">
      ${c.media({ nom: 'grok/studio', alt: c.s('clinics.studio.alt'), classe: 'studio-media', sizes: '(max-width: 760px) 100vw, 50vw', ratio: '3 / 2', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
      ${c.media({ nom: 'home-studio', alt: c.s('clinics.studio.altVignette'), classe: 'studio-vignette', sizes: '220px', ratio: '4 / 3', attrs: 'data-anime="rideau"' })}
    </div>
  </div>
</section>
`;
