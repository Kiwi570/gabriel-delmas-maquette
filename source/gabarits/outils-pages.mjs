/* Petits outils communs aux pages : dates, vidéos, pas de la grille. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Date lisible dans la langue de la page (fuseau de Paris : les concerts ont lieu en France). */
export function dateLisible(iso, l) {
  const d = new Date(iso + 'T12:00:00+01:00');
  return new Intl.DateTimeFormat(l === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Paris' }).format(d);
}

/* Les dates passées sont marquées passées à la génération, puis recalculées dans le navigateur (data-date). */
export function listeDates(c, dates) {
  const auj = new Date().toISOString().slice(0, 10);
  return html`<ul class="dates" data-dates>${dates.map((d) => {
    const passe = d.date < auj;
    return html`<li class="date${passe ? ' date--passee' : ''}" data-date="${d.date}">
      <span class="date-jour">${dateLisible(d.date, c.l)}${d.heure ? html` · ${d.heure.replace(':', ' h ')}` : ''}</span>
      <span class="date-titre">${d.titre}</span>
      <span class="date-lieu">${d.lieu}, ${d.ville}</span>
      <span class="date-statut" data-statut data-passe="${c.s('commun.passe')}" data-avenir="${c.s('commun.aVenir')}">${passe ? c.t('commun.passe') : c.t('commun.aVenir')}</span>
    </li>`;
  })}</ul>`;
}

/* Carte vidéo : vignette, titre, ouverture sur YouTube dans un nouvel onglet. */
export function carteVideo(c, v, sizes = '(max-width: 760px) 80vw, 30vw') {
  return html`<a class="video" href="${v.url || `https://www.youtube.com/watch?v=${v.id}`}" target="_blank" rel="noopener" aria-label="${v.titre}, ${c.s('commun.ouvrirYoutube')}">
    ${c.media({ nom: v.image, alt: '', classe: 'video-media', sizes, ratio: '16 / 9' })}
    <span class="video-lecture" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>
    <span class="video-titre">${v.titre}</span>
    <span class="video-detail">${v.detail}</span>
  </a>`;
}

/* Grille de 16 pas (4 temps de 4 doubles croches). */
export const pas = (classe, attrs = '') => html`<div class="pas ${classe}"${brut(attrs ? ' ' + attrs : '')} aria-hidden="true">${Array.from({ length: 16 }, (_, i) => html`<i class="${i % 4 === 0 ? 'temps' : ''}"></i>`)}</div>`;
