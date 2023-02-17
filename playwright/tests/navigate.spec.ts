import { expect, test } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Products' }).click();
  await page
    .getByRole('link', { name: 'BodyCare Burn fat, stay healthy' })
    .click();
  await expect(page.getByRole('button', { name: 'Add To Cart' })).toBeVisible();
  await page.getByRole('button', { name: 'Add To Cart' }).click();
});
