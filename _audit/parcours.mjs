/* Parcours propres à la maquette de Gabriel Delmas : grille jouable, panier simulé, formulaire prérempli, visionneuse. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  /* 1. Grille jouable : une case se bascule, le motif se change, le bouton lance puis arrête. */
  {
    const { ctx, page } = await contexte({ taille: T('1366×768') });
    try {
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await attendrePret(page);
      await page.locator('#groove').scrollIntoViewIfNeeded();
      await attendre(400);
      const c = page.locator('.seq-case[data-voix="koum"][data-pas="2"]');
      const avant = await c.getAttribute('aria-pressed');
      await c.click();
      const apres = await c.getAttribute('aria-pressed');
      if (avant === apres) R.echec('grille jouable', 'un clic sur une case ne la bascule pas', { page: '/', taille: '1366×768' });
      await page.locator('[data-groove-motif="ghost"]').click();
      const n = await page.locator('.seq-ligne--ka .seq-case[aria-pressed="true"]').count();
      if (n !== 5) R.echec('grille jouable', `motif Ghost notes : ${n} cases de caisse claire au lieu de 5`, { page: '/', taille: '1366×768' });
      const b = page.locator('[data-groove-lecture]');
      await b.click(); await attendre(500);
      if ((await b.getAttribute('aria-pressed')) !== 'true') R.echec('grille jouable', 'le bouton ne lance pas la boucle', { page: '/', taille: '1366×768' });
      await b.click(); await attendre(200);
      if ((await b.getAttribute('aria-pressed')) !== 'false') R.echec('grille jouable', 'le bouton n’arrête pas la boucle', { page: '/', taille: '1366×768' });
    } finally { await ctx.close(); }
  }

  /* 2. Panier : ajout d'une méthode, compteur à 1, donnée abîmée sans blocage. */
  {
    const { ctx, page } = await contexte({ taille: T('390×844') });
    try {
      await page.goto(BASE + '/methodes', { waitUntil: 'load' });
      await attendrePret(page);
      await page.evaluate(() => { try { localStorage.removeItem('gabriel-delmas-panier'); } catch {} });
      await page.reload({ waitUntil: 'load' });
      await attendrePret(page);
      const ajouter = page.locator('[data-panier-ajouter="rythme-interieur"]');
      await ajouter.scrollIntoViewIfNeeded();
      await ajouter.click();
      await attendre(900);
      const compte = (await page.locator('.entete-panier [data-panier-compte]').textContent() || '').trim();
      if (compte !== '1') R.echec('panier', `compteur à « ${compte} » après un ajout`, { page: '/methodes', taille: '390×844' });
      await page.keyboard.press('Escape');
      await page.evaluate(() => localStorage.setItem('gabriel-delmas-panier', '{abîmé'));
      await page.reload({ waitUntil: 'load' });
      if ((await attendrePret(page)) === 'jamais-pret') R.echec('panier', 'une donnée abîmée bloque le site', { page: '/methodes' });
    } finally { await ctx.close(); }
  }

  /* 3. Formulaire : le bouton « Programmer le quartet » préremplit le projet. */
  {
    const { ctx, page } = await contexte({ taille: T('1366×768') });
    try {
      await page.goto(BASE + '/contact?sujet=booking#demande', { waitUntil: 'load' });
      await attendrePret(page);
      await attendre(600);
      const coche = await page.locator('input[name="projet"][value="booking"]').isChecked();
      if (!coche) R.echec('formulaire', 'le projet « booking » n’est pas prérempli depuis l’adresse', { page: '/contact', taille: '1366×768' });
    } finally { await ctx.close(); }
  }

  /* 4. Visionneuse des pages de méthode : s'ouvre, change de page, se ferme à Échap. */
  {
    const { ctx, page } = await contexte({ taille: T('390×844') });
    try {
      await page.goto(BASE + '/methodes', { waitUntil: 'load' });
      await attendrePret(page);
      const v = page.locator('[data-page-livre]').first();
      await v.scrollIntoViewIfNeeded();
      await v.click(); await attendre(300);
      if (await page.locator('[data-visionneuse]').isHidden()) R.echec('visionneuse', 'la page ne s’ouvre pas', { page: '/methodes', taille: '390×844' });
      await page.locator('[data-visionneuse-suivant]').click(); await attendre(200);
      await page.keyboard.press('Escape'); await attendre(200);
      if (!(await page.locator('[data-visionneuse]').isHidden())) R.echec('visionneuse', 'Échap ne ferme pas la visionneuse', { page: '/methodes', taille: '390×844' });
    } finally { await ctx.close(); }
  }
}
