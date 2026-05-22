import { test, expect } from '@playwright/test';

test('Vérification du chargement de la page d\'accueil d\'ÉcoShop', async ({ page }) => {
    await page.goto('/');

    // Validation du titre de l'onglet
    await expect(page).toHaveTitle(/ÉcoShop/);

    // Validation de la présence du H1 principal
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText('Bienvenue sur ÉcoShop');
});