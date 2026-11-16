
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('SauceDemo Login Tests', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // TEST 1: Successful login
  test('should successfully log in with valid credentials', async ({ page }) => {

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.getByText('Products', { exact: true }))
      .toBeVisible();

  });

  // TEST 2: Invalid password
  test('should display an error for an incorrect password', async () => {

    await loginPage.login('standard_user', 'wrong_password');

    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');

  });

  // TEST 3: Empty username and password
  test('should require a username when submitting empty credentials', async () => {

    await loginPage.submitEmptyCredentials();

    await expect(loginPage.errorMessage)
      .toContainText('Username is required');

  });

});
