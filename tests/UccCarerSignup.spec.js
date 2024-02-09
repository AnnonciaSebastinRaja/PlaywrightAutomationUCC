import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://next.urbancarecommunity.com/');
  await page.getByLabel('Enter Password').click();
  await page.getByLabel('Enter Password').fill('123456');
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Care Workers & Nurses' }).click();
  await page.getByRole('link', { name: 'Sign Up for Jobs' }).click();
  await page.locator('#input-168').click();
  await page.locator('#input-168').fill('Annoncia');
  await page.locator('#input-169').click();
  await page.locator('#input-169').fill('Joseph');
  await page.locator('#input-170').click();
  await page.locator('#input-170').fill('8908908900');
  await page.locator('#input-171').click();
  await page.locator('#input-171').fill('ann');
  await page.locator('div:nth-child(3) > .v-input > .v-input__control > .v-input__slot').click();

  await page.locator('#input-170').fill('+447908908900');
  await page.locator('#input-171').click();
  await page.locator('#input-171').fill('annoncia@gmail.com');

  await page.locator('#input-172').fill('Test@123');
  await page.locator('#input-173').click();
  await page.locator('#input-173').fill('Test@123');
  await page.locator('#input-174').click();
  await page.locator('#input-174').fill('FG1 GH11');
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.locator('#input-174').click();
  await page.locator('#input-174').fill('FG1 GH1');
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.locator('#input-174').click();

  await page.locator('.v-input--selection-controls__ripple').click();
  await page.locator('#input-174').click();
  await page.locator('#input-174').fill('IG21');
  await page.locator('.v-input--selection-controls__ripple').click();
});