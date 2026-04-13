import { test, expect } from '@playwright/test';

test.describe('Antuangames - Pruebas básicas', () => {

  test('La página carga correctamente', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.+/);
    console.log('Título:', await page.title());
  });

  test('La página responde y muestra contenido', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });

  test('Captura de pantalla de la página principal', async ({ page }) => {
    await page.goto('/');
    await page.screenshot({ path: 'screenshots/home.png', fullPage: true });
    console.log('Captura guardada en screenshots/home.png');
  });

});