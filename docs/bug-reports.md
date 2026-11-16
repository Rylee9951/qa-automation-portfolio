# QA Defect Reports — SauceDemo

**Project:** QA Automation Portfolio  
**Application:** SauceDemo  
**Document Type:** Defect Reports  
**Status:** Example / Simulated Defect Reports

---

## BUG-001: Shopping Cart Badge Does Not Update After Adding a Product

**Defect Type:** Functional  
**Severity:** High  
**Priority:** High  
**Environment:** Web Application — Chromium

**Description:**

When a user adds a product to the shopping cart, the shopping cart badge does not update to reflect the number of items added.

**Preconditions:**
- User is successfully logged in.
- User is on the inventory page.

**Steps to Reproduce:**
1. Navigate to the SauceDemo login page.
2. Log in using valid credentials.
3. Locate Sauce Labs Backpack.
4. Click Add to cart.
5. Observe the shopping cart badge.

**Expected Result:**

The shopping cart badge should display a count of 1 after adding the product.

**Actual Result:**

The shopping cart badge remains unchanged and does not display the updated item count.

**Impact:**

Users may believe their product was not added to the shopping cart, resulting in confusion and potential loss of purchases.

**Suggested Resolution:**

Investigate the shopping cart state update and ensure the badge reflects the current cart item count.

**Reproducibility:** Always

**Status:** Simulated Example — Not an actual confirmed application defect.

---

## BUG-002: Product Sorting Does Not Display Items in Ascending Price Order

**Defect Type:** Functional  
**Severity:** Medium  
**Priority:** Medium  
**Environment:** Web Application — Chromium

**Description:**

When a user selects Price (low to high), products are not displayed in ascending price order.

**Preconditions:**
- User is successfully logged in.
- User is on the inventory page.

**Steps to Reproduce:**
1. Navigate to the SauceDemo inventory page.
2. Locate the product sorting dropdown.
3. Select Price (low to high).
4. Observe the order of displayed products.

**Expected Result:**

Products should be displayed from the lowest price to the highest price.

**Actual Result:**

Products remain in their original order or appear in an incorrect price sequence.

**Impact:**

Users cannot reliably sort products by price, making it harder to find lower-priced products.

**Suggested Resolution:**

Review the product sorting functionality and verify that numeric price values are sorted in ascending order.

**Reproducibility:** Always

**Status:** Simulated Example — Not an actual confirmed application defect.

---

## Defect Documentation Notes

These reports are simulated examples created for demonstrating QA defect documentation skills.

They are not confirmed defects in the SauceDemo application.

In a real testing environment, defect reports must be based on observed and reproducible behavior.

Severity and priority should be assigned based on business impact and urgency.