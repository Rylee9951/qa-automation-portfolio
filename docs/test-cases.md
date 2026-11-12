# QA Test Cases — SauceDemo

**Project:** QA Automation Portfolio  
**Application:** SauceDemo  
**Application URL:** https://www.saucedemo.com/  
**Testing Framework:** Playwright / TypeScript  
**Browsers:** Chromium, Firefox, WebKit  
**Document Status:** Executed

---

## 1. Authentication Test Cases

### TC-LOGIN-001: Successful Login

**Priority:** High  
**Test Type:** Positive

**Preconditions:**
- SauceDemo application is accessible.
- User is on the login page.

**Test Data:**
- Username: `standard_user`
- Password: `secret_sauce`

**Steps:**
1. Navigate to the SauceDemo login page.
2. Enter `standard_user` in the username field.
3. Enter `secret_sauce` in the password field.
4. Click the Login button.

**Expected Result:**
- User is successfully authenticated.
- User is redirected to the inventory page.
- Product inventory is displayed.

**Execution Status:** Passed

---

### TC-LOGIN-002: Login With Invalid Password

**Priority:** High  
**Test Type:** Negative

**Preconditions:**
- SauceDemo application is accessible.
- User is on the login page.

**Test Data:**
- Username: `standard_user`
- Password: `wrong_password`

**Steps:**
1. Navigate to the SauceDemo login page.
2. Enter `standard_user` in the username field.
3. Enter an incorrect password.
4. Click the Login button.

**Expected Result:**
- User is not authenticated.
- An appropriate error message is displayed.
- User remains on the login page.

**Execution Status:** Passed

---

### TC-LOGIN-003: Login With Empty Credentials

**Priority:** High  
**Test Type:** Negative

**Preconditions:**
- SauceDemo application is accessible.
- User is on the login page.

**Steps:**
1. Navigate to the SauceDemo login page.
2. Leave the username field empty.
3. Leave the password field empty.
4. Click the Login button.

**Expected Result:**
- User is not authenticated.
- A validation error message is displayed.
- User remains on the login page.

**Execution Status:** Passed

---

## 2. Product Inventory Test Cases

### TC-PRODUCT-001: Verify Products Are Displayed

**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- User is successfully logged in.

**Steps:**
1. Navigate to the inventory page.
2. Observe the displayed product inventory.

**Expected Result:**
- Product inventory is visible.
- Product names and product information are displayed.

**Execution Status:** Passed

---

### TC-PRODUCT-002: Verify Product Count

**Priority:** Medium  
**Test Type:** Functional

**Preconditions:**
- User is successfully logged in.
- User is on the inventory page.

**Steps:**
1. Navigate to the inventory page.
2. Count the displayed products.

**Expected Result:**
- Exactly six products are displayed.

**Execution Status:** Passed

---

### TC-PRODUCT-003: Sort Products From Low to High Price

**Priority:** Medium  
**Test Type:** Functional

**Preconditions:**
- User is successfully logged in.
- User is on the inventory page.

**Steps:**
1. Locate the product sorting dropdown.
2. Select Price (low to high).
3. Observe the product order.

**Expected Result:**
- Products are displayed in ascending price order.
- The least expensive product appears first.

**Execution Status:** Passed

---

## 3. Shopping Cart Test Cases

### TC-CART-001: Add Product to Shopping Cart

**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- User is successfully logged in.
- User is on the inventory page.

**Test Data:**
- Product: Sauce Labs Backpack

**Steps:**
1. Locate the Sauce Labs Backpack.
2. Click its Add to cart button.
3. Observe the shopping cart icon.

**Expected Result:**
- Product is added to the shopping cart.
- Shopping cart badge displays a count of 1.

**Execution Status:** Passed

---

### TC-CART-002: Verify Product in Shopping Cart

**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- User is successfully logged in.
- Sauce Labs Backpack has been added to the cart.

**Steps:**
1. Click the shopping cart icon.
2. Observe the cart contents.

**Expected Result:**
- Shopping cart page is displayed.
- Sauce Labs Backpack appears in the cart.

**Execution Status:** Passed

---

### TC-CART-003: Remove Product From Shopping Cart

**Priority:** High  
**Test Type:** Functional

**Preconditions:**
- User is successfully logged in.
- Sauce Labs Backpack has been added to the cart.

**Steps:**
1. Navigate to the shopping cart.
2. Locate Sauce Labs Backpack.
3. Click the Remove button.
4. Observe the shopping cart contents and badge.

**Expected Result:**
- Sauce Labs Backpack is removed.
- No product rows remain in the cart.
- Shopping cart badge is no longer displayed.

**Execution Status:** Passed

---

## 4. Test Execution Summary

| Test Area | Total Cases | Passed |
|---|---:|---:|
| Authentication | 3 | 3 |
| Product Inventory | 3 | 3 |
| Shopping Cart | 3 | 3 |
| **Total** | **9** | **9** |

**Browser Coverage:** Chromium, Firefox, WebKit

**Total Successful Browser Executions:** 27

**Overall Result:** PASS

---

## 5. Notes

- These test cases correspond to the automated Playwright UI tests in the project.
- Each test scenario was executed across three browser engines.
- Test cases document the expected application behavior and provide traceability to automated test scripts.
- Execution results should be updated if future test runs identify failures.