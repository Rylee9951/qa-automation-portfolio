
import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // TEST 1: Successful login
  test('should successfully log in with valid credentials', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.getByText('Products', { exact: true })).toBeVisible();

  });

  // TEST 2: Invalid password
  test('should display an error for an incorrect password', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('wrong_password');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username and password do not match');

  });

  // TEST 3: Empty username and password
  test('should require a username when submitting empty credentials', async ({ page }) => {

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('[data-test="error"]'))
      .toContainText('Username is required');

  });

});
