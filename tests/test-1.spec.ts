import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.init.de/');
  await expect(page.locator('h1')).toContainText('Services for the eSociety Wir nutzen die Kraft der Digitalisierung für den gesellschaftlichen Fortschritt');
  await expect(page.getByRole('banner')).toContainText('Unser Angebot');
  await page.getByRole('link', { name: 'Unser Angebot' }).click();
  await expect(page.locator('h1')).toContainText('Unser Angebot Einfache und nachhaltige Lösungen durch ganzheitliche Digitalisierung');
});