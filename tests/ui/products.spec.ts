
import { test, expect } from '@playwright/test';

test.describe('SauceDemo Product and Shopping Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory.html/);
  });

  // TEST 1: Verify products are displayed
  test('should display products on the inventory page', async ({ page }) => {

    await expect(page.getByText('Products', { exact: true })).toBeVisible();

    await expect(page.getByTestId('inventory-item').first()).toBeVisible();

  });

  // TEST 2: Verify product count
  test('should display six products', async ({ page }) => {

    const products = page.getByTestId('inventory-item');

    await expect(products).toHaveCount(6);

  });

  // TEST 3: Verify sorting by price
  test('should sort products from lowest to highest price', async ({ page }) => {

    await page.getByTestId('product-sort-container').selectOption('lohi');

    const productNames = page.getByTestId('inventory-item-name');

    await expect(productNames.first()).toHaveText('Sauce Labs Onesie');

    await expect(productNames.last()).toHaveText('Sauce Labs Fleece Jacket');

  });

  // TEST 4: Add product to cart
  test('should add a product to the shopping cart', async ({ page }) => {

    const backpack = page.getByTestId('inventory-item')
      .filter({ hasText: 'Sauce Labs Backpack' });

    await backpack.getByRole('button', { name: 'Add to cart' }).click();

    await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');

  });

  // TEST 5: Verify product in cart
  test('should display the correct product in the shopping cart', async ({ page }) => {

    const backpack = page.getByTestId('inventory-item')
      .filter({ hasText: 'Sauce Labs Backpack' });

    await backpack.getByRole('button', { name: 'Add to cart' }).click();

    await page.getByTestId('shopping-cart-link').click();

    await expect(page.getByText('Sauce Labs Backpack', { exact: true }))
      .toBeVisible();

  });

  
  // TEST 6: Remove product from cart
  test('should remove a product from the shopping cart', async ({ page }) => {

    const backpack = page.getByTestId('inventory-item')
      .filter({ hasText: 'Sauce Labs Backpack' });

    await backpack.getByRole('button', { name: 'Add to cart' }).click();

    await page.getByTestId('shopping-cart-link').click();

    await page.getByRole('button', { name: 'Remove' }).click();

    // Verify the product is no longer in the cart
    await expect(
      page.getByTestId('inventory-item')
    ).toHaveCount(0);

    // Verify the shopping cart badge disappears
    await expect(
      page.getByTestId('shopping-cart-badge')
    ).toHaveCount(0);

  });


});
