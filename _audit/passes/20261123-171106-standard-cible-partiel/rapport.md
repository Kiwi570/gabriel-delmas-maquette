# Rapport d’audit

Projet : `gabriel-delmas-maquette` · 23/11/2026 18:15:58 · 5 min · 13 page(s) · audit standard ciblé sur /,/404,/bio,/clinics-et-studio,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/methodes,/musique (étapes : fichiers, mesures)

## Résumé

- Statut : **6 échec(s)**
- Passe : `20261123-171106-standard-cible-partiel` · version ?v=1
- Échecs : **6**
- À regarder : **33**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (143), balayage (12)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161802-rapide-cible | rapide | /,/musique,/methodes,/clinics-et-studio,/bio,/contact | toutes | 107 | 49 | 1 | échecs |
| 20261123-164151-standard | standard | toutes | toutes | 59 | 43 | 1 | échecs |
| **20261123-171106-standard-cible-partiel** (celle-ci) | standard | /,/404,/bio,/clinics-et-studio,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/methodes,/musique | fichiers, mesures | 6 | 33 | 0 | échecs |

## Échecs

### textes qui se chevauchent (6)

- **textes qui se chevauchent** — `/en/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Released 29 May 2026 · CD on 5 June · Jazz Family » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/musique` — section#debut > div.conteneur.tete-album-grille > div.tete-album-texte > p.surtitre.hero-surtitre « GABRIEL DELMAS TRIO & GAËL HORELLOU » — avec div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « NEW » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/en/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.masque-ecran-bas:nth-of-type(1) « The trio's first album, with Gaël Horellou on saxo » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Sorti le 29 mai 2026 · CD le 5 juin · Jazz Family » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/musique` — section#debut > div.conteneur.tete-album-grille > div.tete-album-texte > p.surtitre.hero-surtitre « GABRIEL DELMAS TRIO & GAËL HORELLOU » — avec div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « NEW » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.masque-ecran-bas:nth-of-type(1) « Le premier album du trio, avec le saxophone de Gaë » _(1920×1080 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (28)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#dates > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · LE PROJET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#dates > figure.media.fin-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « STEP 1 OF 4 · PROJECT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(1) > dt « WHO IT'S FOR » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(2) > dt « WHAT'S INSIDE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — section#travailler > div.conteneur.travailler-grille > figure.media.travailler-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/musique` — section#dates > figure.media.fin-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 3 autres (rapport.json)

### section sans visuel (3)

- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Formulaire de démonstration : rien n » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. 1 2 3 4 S » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. WHAT IS Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 58 min de travail pour 115 min de budget, 7 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /bio, /clinics-et-studio, /contact, /en, /en/bio, /en/clinics-et-studio, /en/contact, /en/methodes, /en/musique, /methodes, /musique.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/en/musique,/musique --seulement=fichiers,mesures
```
