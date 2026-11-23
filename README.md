# Gabriel Delmas : maquette

Maquette du futur site de Gabriel Delmas, batteur (jazz, funk, New Orleans), en français et en anglais.
Adresse : https://gabriel-delmas-maquette.vercel.app

Direction « New Step » : la pochette de l’album devient le site. Fond pierre grège pour lire et acheter, noir de studio pour les portraits, rouge lave pour l’action. Titres en Big Shoulders Display, un mot en Instrument Serif italique, texte en Figtree, toutes les polices hébergées avec le site.

## Pages

| Page | Ouverture | Contenu |
|---|---|---|
| Accueil `/` | Nom en très grand, grille de 16 pas qui joue en silence et halo qui bat la mesure, portrait à la caisse claire | New Step et ses 11 titres avec tête de lecture, vidéos, grille jouable (Koum, Ka, syllabes en grand), méthodes, clinics et studio, scènes partagées, kit en plein écran, le quartet sur scène |
| Musique `/musique` | « NEW STEP » géant sur la pierre et le quartet | Onze titres, quartet, vidéos, dates, booking |
| Méthodes `/methodes` | Portrait au pad, couvertures en éventail | Trois fiches avec panier simulé, pages à feuilleter, compter, chanter, groover |
| Clinics & studio `/clinics-et-studio` | Clinic en plein cadre | Thèmes, organiser une clinic, sessions intensives, batterie à distance, cours |
| Bio & matériel `/bio` | Studio gris en plein cadre | Frise du parcours, scènes partagées, kit Sonor, Zildjian et Remo |
| Contact `/contact` | Portrait en extérieur | Demande en quatre étapes, préremplie selon le bouton d’origine (`?sujet=booking`, `clinic`, `studio`, `remplacement`, `cours`, `methodes`) |
| 404 | Une baguette oubliée sur une scène vide | Retour à l’accueil |

Les versions anglaises sont sous `/en/…`.

## Modifier la maquette

- Textes : `donnees/textes/fr.json` et `en.json`. Données : `donnees/*.json` (album, vidéos, dates, livres, parcours, matériel).
- Pages : `source/pages/*.mjs`, gabarit commun : `source/gabarits/commun.mjs`. Style : `assets/css/site.css`. Effets : `assets/js/site.js`.
- Après chaque modification : `node outils/generer.mjs` (les pages `.html` sont générées, ne pas les modifier à la main).
- Dates : ajouter une entrée dans `donnees/dates.json` (`date` au format AAAA-MM-JJ). Les dates passées sont marquées « Passé » toutes seules, à la date du jour.
- Images : `plan-images.json`, puis le pipeline de la bibliothèque (`produire.mjs`, `partage.mjs`). Les aperçus flous des images d’ouverture sont dans `donnees/apercus.json` (24 px en base64) : à refaire si une photo d’ouverture change.
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).

## À fournir par Gabriel (à compléter)

- Mentions légales : nom ou raison sociale, adresse, SIRET (ou équivalent), directeur de la publication. À compléter.
- Hébergeur : Vercel Inc., adresse à vérifier sur le site de Vercel au moment de la mise en ligne. À compléter.
- Politique de confidentialité (RGPD) pour le formulaire et le panier. À compléter.
- La pochette de *New Step* en grand format : celle du site actuel fait 450 px, elle est affichée en taille moyenne.
- Les prix et frais de port réels de la boutique au moment de la mise en ligne (repris des fiches Wix du 23 novembre 2026 : 28 € et 15 €). Les frais d’envoi du livre papier ne sont pas indiqués sur le site actuel : le panier affiche « calculée à la commande ».
- Les tarifs des cours et des sessions intensives : absents du site actuel, la maquette dit « Tarifs et disponibilités donnés par e-mail ».
- Les prochaines dates du quartet : aucune date à venir sur le site actuel, la maquette affiche « Les prochaines dates du quartet sont annoncées ici dès qu’elles sont confirmées ».
- L’identifiant YouTube de la vidéo de déballage du kit SQ² : la carte renvoie pour l’instant vers la chaîne.
- Crédit photo des autres images (seule la photo de concert porte un crédit : Firmin de Montégut Photos).

## Informations reprises hors du site actuel (à confirmer par Gabriel)

- Florent Hortal (guitare) et Nicolas Blancot (claviers) : billetterie du Sunset-Sunside, Office de tourisme de Toulouse, et leurs noms figurent sur la pochette.
- Les 11 titres de *New Step* et la sortie du CD le 5 juin 2026 : fiche du distributeur (Socadisc).
- Dates passées : 7 octobre 2026 au Sunset (Paris) et 18 décembre 2025 au Taquin (Toulouse).
- L’origine du projet (soirée au Taquin en mai 2024) et les influences (The Meters, Stanton Moore, Maceo Parker, Mark Guiliana, Chris Potter, Snarky Puppy) : textes de présentation publics.

## Incohérences du site actuel, à trancher

- La bio française et la bio anglaise ne disent pas la même chose (Franck Agulhon et Renarde seulement en anglais, Dave Weckl seulement en français). La maquette reprend les deux, sauf Renarde, que seule la version anglaise cite (à confirmer).
- Deux adresses YouTube différentes (en-tête et pied de page) : la maquette garde @gabrieldelmasdrummer.
- Le bouton BILLETS du site actuel mène encore au concert du 7 octobre 2026, passé.

## Illustrations générées

Six images ont été créées par IA (clinic, studio, club, pad et métronome, salle de travail, 404). Elles portent la mention « Illustration générée » : **à garder sur le site final**, ou à remplacer par de vraies photos. Aucune ne montre une personne reconnaissable ni un lieu réel.

## À la mise en ligne définitive

- Retirer : la consigne `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), le formulaire et le panier simulés (brancher un vrai envoi, ou un vrai paiement), les mentions « à compléter » du pied de page, la ligne « Maquette de démonstration ».
- Remplacer les phrases d’attente (dates, tarifs, frais de port) par les vraies informations.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Limites de la maquette

- Le panier et le formulaire sont simulés : rien n’est envoyé, rien n’est payé.
- Le tiroir du panier est en français sur les deux versions (module de démonstration).
- La grille jouable synthétise ses sons dans le navigateur : ce ne sont pas des enregistrements de Gabriel.
