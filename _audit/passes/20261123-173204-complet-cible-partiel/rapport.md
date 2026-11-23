# Rapport d’audit

Projet : `gabriel-delmas-maquette` · 23/11/2026 18:41:14 · 9 min · 9 page(s) · audit complet ciblé sur /,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/musique (étapes : fichiers, mesures)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261123-173204-complet-cible-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **27**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (351), balayage (9)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161802-rapide-cible | rapide | /,/musique,/methodes,/clinics-et-studio,/bio,/contact | toutes | 107 | 49 | 1 | échecs |
| 20261123-164151-standard | standard | toutes | toutes | 59 | 43 | 1 | échecs |
| 20261123-171106-standard-cible-partiel | standard | /,/404,/bio,/clinics-et-studio,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/methodes,/musique | fichiers, mesures | 6 | 33 | 0 | échecs |
| 20261123-171605-standard-cible-partiel | standard | /,/en/musique,/musique | fichiers, mesures | 0 | 9 | 0 | complet |
| 20261123-171723-complet-partiel | complet | toutes | mesures, ecran | 12 | 33 | 0 | échecs |
| **20261123-173204-complet-cible-partiel** (celle-ci) | complet | /,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/musique | fichiers, mesures | 4 | 27 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Écouter New Step » _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en` — div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Listen to New Step » _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — div.hero-texte > div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-info:nth-of-type(2) « Nouvel album New Step, chez Jazz Family » _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_
- **premier écran : information clé hors de l’écran** — `/en` — div.hero-texte > div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-info:nth-of-type(2) « New album New Step, on Jazz Family » _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### texte de contenu sous 13 px (ordinateur) (22)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#dates > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · LE PROJET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#dates > figure.media.fin-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « STEP 1 OF 4 · PROJECT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(1) > dt « WHO IT'S FOR » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(2) > dt « WHAT'S INSIDE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — section#travailler > div.conteneur.travailler-grille > figure.media.travailler-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/musique` — section#dates > figure.media.fin-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/musique` — section#dates > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_

### section sans visuel (3)

- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Formulaire de démonstration : rien n » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. 1 2 3 4 S » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. WHAT IS Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 58 min de travail pour 115 min de budget, 7 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/en --seulement=fichiers,mesures
```
