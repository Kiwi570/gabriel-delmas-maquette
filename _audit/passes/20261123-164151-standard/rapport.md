# Rapport d’audit

Projet : `gabriel-delmas-maquette` · 23/11/2026 18:07:11 · 25 min · 13 page(s) · audit standard

## Résumé

- Statut : **59 échec(s)**
- Passe : `20261123-164151-standard` · version ?v=1
- Échecs : **59**
- À regarder : **43**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (143), balayage (12), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (13), liens et boutons (13), liens profonds (16), liens vers la page en cours (12), changements de hauteur (5), parcours du projet (1), tient dans l’écran (10), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (5), vitesse (12), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161802-rapide-cible | rapide | /,/musique,/methodes,/clinics-et-studio,/bio,/contact | toutes | 107 | 49 | 1 | échecs |
| **20261123-164151-standard** (celle-ci) | standard | toutes | toutes | 59 | 43 | 1 | échecs |

## Échecs

### image non chargée (13)

- **image non chargée** — `/` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/404` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/bio` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/clinics-et-studio` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/contact` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/en` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/en/bio` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/en/clinics-et-studio` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/en/contact` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/en/methodes` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/en/musique` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/methodes` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(768×1024 normal, 320×568 normal, 390×844 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **image non chargée** — `/musique` — body#haut > div.pet.pet--pret:nth-of-type(5) > div.pet__annonce:nth-of-type(2) > img _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 1366×768 normal, 1920×1080 normal, +2)_

### texte sous 12 px (16)

- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « caisse claire » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « grosse caisse » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « snare » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(1) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « bass drum » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « snare » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(2) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « bass drum » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « snare » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(3) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « bass drum » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--ka:nth-of-type(2) > span.seq-nom > span « snare » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/en` — div.seq-temps:nth-of-type(4) > div.seq-ligne.seq-ligne--koum:nth-of-type(3) > span.seq-nom > span « bass drum » — 11.2 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (8)

- **premier écran : bouton principal hors de l’écran** — `/` — div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Écouter New Step » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/bio` — div.conteneur.tete-plein-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton « Voir le parcours » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/clinics-et-studio` — div.conteneur.tete-plein-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Organiser une clinic » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en` — div.hero-bas > div.hero-detail:nth-of-type(2) > p.hero-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Listen to New Step » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/bio` — div.conteneur.tete-plein-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton « See the story » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/clinics-et-studio` — div.conteneur.tete-plein-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Set up a clinic » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/contact` — div.tete-scindee-texte > div.hero-detail > p.actions:nth-of-type(3) > a.bouton « Start your request » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/methodes` — div.tete-scindee-texte:nth-of-type(1) > div.hero-detail > p.actions:nth-of-type(3) > a.bouton « See the books » _(1920×1080 normal)_

### textes qui se chevauchent (15)

- **textes qui se chevauchent** — `/404` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « 404 » — avec div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque > span.hero-ligne « BAGUETTE PERDUE » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/bio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « BIO & MATÉRIEL » — avec div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « UNE VIE » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/clinics-et-studio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « CLINICS, SESSIONS ET STUDIO » — avec div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « TRANSMETTRE » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte > p.surtitre.hero-surtitre « CONTACT » — avec div.tete-scindee-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « PARLONS DE » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/bio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « BIO & GEAR » — avec div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « A LIFE » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/clinics-et-studio` — section#debut > div.conteneur.tete-plein-texte > p.surtitre.hero-surtitre « CLINICS, SESSIONS AND STUDIO » — avec div.conteneur.tete-plein-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « PASSING ON » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/contact` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte > p.surtitre.hero-surtitre « CONTACT » — avec div.tete-scindee-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « LET'S TALK ABOUT » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/methodes` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > p.surtitre.hero-surtitre « GABRIEL DELMAS'S METHODS » — avec div.tete-scindee-texte:nth-of-type(1) > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « FROM PAD » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/musique` — section#debut > div.conteneur.tete-album-grille > div.tete-album-texte > p.surtitre.hero-surtitre « GABRIEL DELMAS TRIO & GAËL HORELLOU » — avec div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « NEW » _(390×844 normal, 390×844 sansJs, 1920×1080 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Released 29 May 2026 · CD on 5 June · Jazz Family » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/en/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.masque-ecran-bas:nth-of-type(1) « The trio's first album, with Gaël Horellou on saxo » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/methodes` — section#debut > div.conteneur.tete-scindee-grille > div.tete-scindee-texte:nth-of-type(1) > p.surtitre.hero-surtitre « LES MÉTHODES DE GABRIEL DELMAS » — avec div.tete-scindee-texte:nth-of-type(1) > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « DU PAD » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/musique` — section#debut > div.conteneur.tete-album-grille > div.tete-album-texte > p.surtitre.hero-surtitre « GABRIEL DELMAS TRIO & GAËL HORELLOU » — avec div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne « NEW » _(390×844 normal, 390×844 sansJs, 1920×1080 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.hero-info:nth-of-type(2) « Sorti le 29 mai 2026 · CD le 5 juin · Jazz Family » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/musique` — div.tete-album-texte > h1.titre-geant.hero-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne « STEP » — avec div.conteneur.tete-album-grille > div.tete-album-texte > div.hero-detail > p.masque-ecran-bas:nth-of-type(1) « Le premier album du trio, avec le saxophone de Gaë » _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.tete-plein-texte > div.hero-detail > p.hero-info:nth-of-type(3) « Écouter New Step : Musique » _(1366×768 sansJs)_

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/en` — nav > ul > li:nth-of-type(2) > a « Music » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/bio` — nav > ul > li:nth-of-type(2) > a « Music » — 43 × 44 px _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/clinics-et-studio` — nav > ul > li:nth-of-type(2) > a « Music » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/contact` — nav > ul > li:nth-of-type(2) > a « Music » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/methodes` — nav > ul > li:nth-of-type(2) > a « Music » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/musique` — nav > ul > li:nth-of-type(2) > a « Music » — 43 × 44 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `en/contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

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
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. 1 2 3 4 S » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/en/contact` — section#demande « YOUR REQUEST Demo form: nothing is sent. WHAT IS Y » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 76 ms (différence 49 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/musique` — à 75 ms (différence 43 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/musique` — à 65 ms (différence 38 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (3)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.5 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/methodes` — écran différent à la même position après rechargement (5.1 %), voir comparaisons/rechargement-methodes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/musique` — écran différent à la même position après rechargement (10.4 %), voir comparaisons/rechargement-musique-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 58 min de travail pour 115 min de budget, 7 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /clinics-et-studio, /contact, /methodes, /musique.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2836 ms depuis le premier octet
- Ouverture /clinics-et-studio (1366×768) : 2744 ms depuis le premier octet
- film de l'ouverture /clinics-et-studio 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2710 ms depuis le premier octet
- Ouverture /methodes (1366×768) : 2761 ms depuis le premier octet
- Ouverture /musique (1366×768) : 2748 ms depuis le premier octet
- Ouverture / (390×844) : 2843 ms depuis le premier octet
- Ouverture /clinics-et-studio (390×844) : 2694 ms depuis le premier octet
- film de l'ouverture /clinics-et-studio 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2675 ms depuis le premier octet
- Ouverture /methodes (390×844) : 2699 ms depuis le premier octet
- Ouverture /musique (390×844) : 2710 ms depuis le premier octet
- Bords de l’écran : 405 images d’intro, 31 de voile et 148 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
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
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 472, tâche la plus longue 0 ms
- Fluidité /clinics-et-studio 1366×768 (molette) : 0 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 190, tâche la plus longue 0 ms
- Fluidité /methodes 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /musique 1366×768 (molette) : 0 % d'images lentes sur 289, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1360, tâche la plus longue 0 ms
- Fluidité /clinics-et-studio 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /methodes 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /musique 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Vitesse / : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /bio : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /clinics-et-studio : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /en : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/bio : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/clinics-et-studio : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/contact : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/methodes : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/musique : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /methodes : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /musique : 0.37 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/bio,/clinics-et-studio,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/methodes,/musique --seulement=fichiers,mesures
```
