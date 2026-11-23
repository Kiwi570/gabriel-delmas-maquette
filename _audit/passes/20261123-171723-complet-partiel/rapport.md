# Rapport d’audit

Projet : `gabriel-delmas-maquette` · 23/11/2026 18:31:36 · 14 min · 13 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261123-171723-complet-partiel` · version ?v=1
- Échecs : **12**
- À regarder : **33**
- Non lancé : **0**
- Contrôles passés : mesures (507), balayage (12), tient dans l’écran (16)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161802-rapide-cible | rapide | /,/musique,/methodes,/clinics-et-studio,/bio,/contact | toutes | 107 | 49 | 1 | échecs |
| 20261123-164151-standard | standard | toutes | toutes | 59 | 43 | 1 | échecs |
| 20261123-171106-standard-cible-partiel | standard | /,/404,/bio,/clinics-et-studio,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/methodes,/musique | fichiers, mesures | 6 | 33 | 0 | échecs |
| 20261123-171605-standard-cible-partiel | standard | /,/en/musique,/musique | fichiers, mesures | 0 | 9 | 0 | complet |
| **20261123-171723-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 12 | 33 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/` — div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Écouter New Step » _(1000×560 sansJs, 1280×720 sansJs, 1440×900 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en` — div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Listen to New Step » _(844×390 sansJs, 1000×560 sansJs, 1280×720 sansJs, 1440×900 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/musique` — div.tete-album-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Listen to the album » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/musique` — div.tete-album-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Écouter l'album » _(1000×560 sansJs)_

### texte coupé (1)

- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — avec div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__num:nth-of-type(1) « 4 » _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/en` — nav > ul > li:nth-of-type(1) > a « Music » — 42 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/en/bio` — nav > ul > li:nth-of-type(1) > a « Music » — 42 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/en/clinics-et-studio` — nav > ul > li:nth-of-type(1) > a « Music » — 42 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/en/contact` — nav > ul > li:nth-of-type(1) > a « Music » — 42 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/en/methodes` — nav > ul > li:nth-of-type(1) > a « Music » — 42 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **zone tactile sous 44 px** — `/en/musique` — nav > ul > li:nth-of-type(1) > a « Music » — 42 × 44 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_

## À regarder

### texte de contenu sous 13 px (ordinateur) (30)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1024×768 sansJs, 1024×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#dates > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1440×900 normal, 1366×768 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · LE PROJET » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(1) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — div.deux-cartes > article.grande-carte:nth-of-type(2) > figure.media.grande-carte-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#dates > figure.media.fin-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#debut > figure.media.tete-plein-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(1) > dt « GABRIEL DELMAS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div > dl.contacts > div:nth-of-type(2) > dt « SONOR, ARTIST MANAGER » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — section#sessions > div.conteneur.sessions-grille > figure.media.sessions-media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/clinics-et-studio` — div.conteneur.studio-grille > div.studio-images:nth-of-type(2) > figure.media.studio-media:nth-of-type(1) > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « STEP 1 OF 4 · PROJECT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(1) > dt « WHO IT'S FOR » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/methodes` — div.livre-texte:nth-of-type(2) > dl.livre-details > div:nth-of-type(2) > dt « WHAT'S INSIDE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- … et 5 autres (rapport.json)

### section sans visuel (3)

- **section sans visuel** — `/contact` — section#demande « VOTRE DEMANDE Formulaire de démonstration : rien n » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. 1 2 3 4 S » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 320×568 sansWebgl, 375×667 sansWebgl, 390×844 sansWebgl)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. WHAT IS Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /bio : aucune section épinglée ou plein écran.
- Tient dans l'écran /clinics-et-studio : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/bio : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/clinics-et-studio : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/methodes : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/musique : aucune section épinglée ou plein écran.
- Tient dans l'écran /methodes : aucune section épinglée ou plein écran.
- Tient dans l'écran /musique : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/musique --seulement=fichiers,mesures
```
