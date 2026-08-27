import { test, expect } from '@playwright/test';

test('homepage has correct title and elements', async ({ page }) => {
  await page.goto('/');

  // Check the title
  await expect(page).toHaveTitle(/БЦ Розмарин/);

  // Check the header presence
  const header = page.locator('header');
  await expect(header).toBeVisible();

  // Check for navigation links
  await expect(page.locator('text=Резиденти')).toBeVisible();
  await expect(page.locator('text=Оренда')).toBeVisible();

  // Check footer presence
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  await expect(page.locator('text=Усі права захищено')).toBeVisible();
});

test('navigation to businesses page works', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Резиденти');
  await expect(page).toHaveURL(/.*businesses/);
});

