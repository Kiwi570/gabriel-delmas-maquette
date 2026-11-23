# Rapport d’audit

Projet : `gabriel-delmas-maquette` · 23/11/2026 18:51:59 · 8 min · 4 page(s) · audit standard ciblé sur /,/methodes,/clinics-et-studio,/bio (étapes : films, parcours, mouvement)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-174406-standard-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : films d’ouverture (8), films de transition (8), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens profonds (16), liens vers la page en cours (4), changements de hauteur (4), parcours du projet (1), mouvement (8), effets du plan (7), souris immobile (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-161802-rapide-cible | rapide | /,/musique,/methodes,/clinics-et-studio,/bio,/contact | toutes | 107 | 49 | 1 | échecs |
| 20261123-164151-standard | standard | toutes | toutes | 59 | 43 | 1 | échecs |
| 20261123-171106-standard-cible-partiel | standard | /,/404,/bio,/clinics-et-studio,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/methodes,/musique | fichiers, mesures | 6 | 33 | 0 | échecs |
| 20261123-171605-standard-cible-partiel | standard | /,/en/musique,/musique | fichiers, mesures | 0 | 9 | 0 | complet |
| 20261123-171723-complet-partiel | complet | toutes | mesures, ecran | 12 | 33 | 0 | échecs |
| 20261123-173204-complet-cible-partiel | complet | /,/contact,/en,/en/bio,/en/clinics-et-studio,/en/contact,/en/methodes,/en/musique,/musique | fichiers, mesures | 4 | 27 | 0 | échecs |
| 20261123-174121-complet-cible-partiel | complet | /,/en | fichiers, mesures | 0 | 12 | 0 | complet |
| **20261123-174406-standard-cible-partiel** (celle-ci) | standard | /,/methodes,/clinics-et-studio,/bio | films, parcours, mouvement | 0 | 4 | 0 | complet |

## Échecs

Aucun.

## À regarder

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/musique` — à 80 ms (différence 43 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/musique` — à 75 ms (différence 42 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (16.5 %), voir comparaisons/rechargement-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/methodes` — écran différent à la même position après rechargement (5.1 %), voir comparaisons/rechargement-methodes-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /, /bio, /clinics-et-studio, /methodes.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2833 ms depuis le premier octet
- Ouverture /bio (1366×768) : 2713 ms depuis le premier octet
- Ouverture /clinics-et-studio (1366×768) : 2807 ms depuis le premier octet
- Ouverture /methodes (1366×768) : 2691 ms depuis le premier octet
- Ouverture / (390×844) : 2845 ms depuis le premier octet
- Ouverture /bio (390×844) : 2770 ms depuis le premier octet
- Ouverture /clinics-et-studio (390×844) : 2683 ms depuis le premier octet
- Ouverture /methodes (390×844) : 2758 ms depuis le premier octet

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
