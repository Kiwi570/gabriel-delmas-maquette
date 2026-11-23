/* Contact : portrait en extérieur, demande en quatre étapes (module formulaire-par-etapes), coordonnées directes. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'portrait-exterieur-1280.webp', formulaire: true };

const SUJETS = [
  ['booking', 's1', 'd1', html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="M6 24V10l10-4 10 4v14"/><path d="M12 24v-7h8v7"/></svg>`],
  ['clinic', 's2', 'd2', html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="11" r="4"/><path d="M7 27c1-5 5-8 9-8s8 3 9 8"/></svg>`],
  ['studio', 's3', 'd3', html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><rect x="12" y="4" width="8" height="14" rx="4"/><path d="M8 15a8 8 0 0 0 16 0M16 23v5"/></svg>`],
  ['remplacement', 's4', 'd4', html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="M6 12h17l-4-4M26 20H9l4 4"/></svg>`],
  ['cours', 's5', 'd5', html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="8" width="20" height="18" rx="2"/><path d="M6 13h20M11 5v6M21 5v6"/></svg>`],
  ['methodes', 's6', 'd6', html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><path d="M7 6h12l6 6v14H7z"/><path d="M19 6v6h6"/></svg>`],
];

const MESSAGES_EN = {
  obligatoire: 'This field is required.', choix: 'Choose an option to continue.', plusieurs: 'Choose at least {n} option(s).',
  case: 'Tick this box to continue.', email: 'Check the e-mail address (example: name@domain.com).', tel: 'Check the phone number.',
  url: 'Check the address.', court: 'Write at least {n} characters.', format: 'The format is not recognised.', nombre: 'Check the value.',
  erreurs: '{n} field(s) to fix.', etape: 'Step {n} of {total}', vide: 'Not specified', modifier: 'Edit', progression: 'Progress',
};

export default (c) => {
  const f = (k) => c.t('contact.form.' + k);
  return html`
<section class="tete-scindee tete-scindee--pierre ecran theme-pierre" id="debut">
  <div class="conteneur tete-scindee-grille">
    <div class="tete-scindee-texte">
      <p class="surtitre hero-surtitre" data-anime="gsap">${c.t('contact.tete.surtitre')}</p>
      <h1 class="titre-geant hero-titre tete-contact-titre" data-anime="gsap">
        <span class="ligne-masque"><span class="hero-ligne">${c.t('contact.tete.titre1')}</span></span>
        <span class="ligne-masque"><span class="hero-ligne hero-ligne--rouge">${c.t('contact.tete.titre2')}</span></span>
      </h1>
      <div class="hero-detail" data-anime="gsap">
        <p class="masque-ecran-bas">${c.t('contact.tete.texte')}</p>
        <p class="hero-info" data-info-cle>${c.t('contact.tete.info')} · <span class="email-texte">${c.site.contact.email}</span></p>
        <p class="actions"><a class="bouton" href="#demande" data-action-principale data-survol="magnetique">${c.t('contact.tete.action')}</a></p>
      </div>
    </div>
    ${c.media({ nom: 'portrait-exterieur', alt: c.s('contact.tete.alt'), priorite: true, classe: 'tete-portrait tete-portrait--large', sizes: '(max-width: 760px) 100vw, 46vw', cadrage: '50% 40%', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
  </div>
</section>

<section class="demande section theme-noir" id="demande">
  <div class="conteneur demande-grille">
    <div class="demande-tete">
      <h2 class="titre-section" data-anime="lignes">${f('titre')}</h2>
      <p class="petit">${f('simule')}</p>
      ${c.media({ nom: 'portrait-pad', alt: c.s('methodes.tete.alt'), classe: 'demande-media', sizes: '(max-width: 760px) 60vw, 26vw', ratio: '4 / 5', cadrage: '50% 30%', attrs: 'data-anime="rideau"' })}
    </div>
    <div class="fpe" data-module="formulaire-par-etapes" data-mailto="${c.site.contact.email}" data-sujet="${c.s('pages.contact.nav')} : Gabriel Delmas"${c.l === 'en' ? html` data-messages="${JSON.stringify(MESSAGES_EN)}"` : ''}>
      <div class="fpe__carton">
        <form class="fpe__form" action="mailto:${c.site.contact.email}" method="post" enctype="text/plain" novalidate>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape1')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${f('q1')}</h3></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.form.etape1')}">
              ${SUJETS.map(([v, t, d, icone], i) => html`<label class="fpe__carte"><input type="radio" name="projet" value="${v}"${i === 0 ? html` required` : ''}>${icone}<span class="fpe__carte-titre">${f(t)}</span><span class="fpe__carte-texte">${f(d)}</span></label>`)}
            </div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape2')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${f('q2')}</h3></legend>
            <div class="fpe__grille">
              <div class="fpe__champ"><label for="f-date">${f('date')}</label><input id="f-date" name="date"></div>
              <div class="fpe__champ"><label for="f-lieu">${f('lieu')}</label><input id="f-lieu" name="lieu" autocomplete="address-level2"></div>
            </div>
            <div class="fpe__champ"><label for="f-message">${f('message')} <i aria-hidden="true">*</i></label><textarea id="f-message" name="message" rows="5" minlength="10" required></textarea></div>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape3')}">
            <legend class="fpe__legende"><h3 class="fpe__titre">${f('q3')}</h3></legend>
            <div class="fpe__grille">
              <div class="fpe__champ"><label for="f-nom">${f('nom')} <i aria-hidden="true">*</i></label><input id="f-nom" name="nom" autocomplete="name" required></div>
              <div class="fpe__champ"><label for="f-email">${f('email')} <i aria-hidden="true">*</i></label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
              <div class="fpe__champ"><label for="f-tel">${f('tel')}</label><input id="f-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}"></div>
              <div class="fpe__champ"><label for="f-structure">${f('structure')}</label><input id="f-structure" name="structure" autocomplete="organization"></div>
            </div>
            <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="${f('accord')}" data-hors-recap><span class="fpe__choix-texte">${f('accord')} <i aria-hidden="true">*</i></span></label>
            <p class="fpe__aide">${f('donnees')}</p>
          </fieldset>
          <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape4')}" data-recap>
            <legend class="fpe__legende"><h3 class="fpe__titre">${f('q4')}</h3></legend>
            <div class="fpe__recap"></div>
          </fieldset>
          <div class="fpe__nav">
            <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${f('precedent')}</button>
            <button class="fpe__bouton" type="button" data-suivant>${f('suivant')}</button>
            <button class="fpe__bouton" type="submit">${f('envoyer')}</button>
          </div>
        </form>
        <div class="fpe__fin" hidden>
          <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
          <h3>${f('merci')}</h3>
          <p data-resume></p>
          <p>${f('merciTexte')}</p>
          <div class="fpe__fin-actions">
            <a class="fpe__bouton" href="mailto:${c.site.contact.email}" data-mailto hidden>${f('mailto')}</a>
            <button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${f('recommencer')}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="coordonnees section theme-pierre" id="coordonnees">
  <div class="conteneur coordonnees-grille">
    <h2 class="titre-section" data-anime="lignes">${c.t('contact.coordonnees.titre')}</h2>
    <ul class="cartes-contact" data-anime="cascade" data-visuel>
      <li><p class="surtitre">${c.t('contact.coordonnees.gabriel')}</p><p>${c.t('contact.coordonnees.gabrielTexte')}</p><a class="email" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></li>
      <li><p class="surtitre">${c.t('contact.coordonnees.trio')}</p><p>${c.t('contact.coordonnees.trioTexte')}</p><a class="email" href="mailto:${c.site.contact.emailTrio}">${c.site.contact.emailTrio}</a></li>
      <li><p class="surtitre">${c.t('contact.coordonnees.sonor')}</p><p>${c.t('contact.coordonnees.sonorTexte')}</p><a class="email" href="mailto:${c.site.contact.emailSonor}">${c.site.contact.emailSonor}</a></li>
      <li><p class="surtitre">${c.t('contact.coordonnees.reseaux')}</p><ul class="reseaux">${c.site.reseaux.map((r) => html`<li><a href="${r.url}" target="_blank" rel="noopener">${r.nom}</a></li>`)}</ul></li>
    </ul>
  </div>
</section>
`;
};
