# QA Test Plan — SauceDemo

**Project:** QA Automation Portfolio  
**Application:** [SauceDemo](https://www.saucedemo.com/)  
**Document Type:** Software Test Plan  
**Testing Framework:** Playwright with TypeScript  
**Browsers:** Chromium, Firefox, WebKit  
**Status:** In Progress

---

## 1. Objective

The objective of this test plan is to verify the core functionality of the SauceDemo web application through automated UI testing.

Testing focuses on user authentication, product inventory, product sorting, and shopping cart functionality.

The goal is to identify functional issues, verify expected application behavior, and demonstrate repeatable cross-browser testing.

## 2. Scope of Testing

### In Scope

- User login with valid credentials.
- Login with invalid credentials.
- Login with empty credentials.
- Product inventory visibility.
- Product count verification.
- Sorting products from low to high price.
- Adding a product to the shopping cart.
- Verifying the correct product appears in the cart.
- Removing a product from the shopping cart.

### Out of Scope

- Payment processing.
- Real-world financial transactions.
- Backend database validation.
- Security penetration testing.
- Performance and load testing.
- Checkout completion workflows.

## 3. Test Environment

| Component | Configuration |
|---|---|
| Application | SauceDemo |
| Application URL | https://www.saucedemo.com/ |
| Automation Framework | Playwright |
| Programming Language | TypeScript |
| Test Runner | Playwright Test |
| Browsers | Chromium, Firefox, WebKit |
| Test Data | SauceDemo demo credentials |
| Version Control | Git / GitHub |

## 4. Testing Approach

Automated functional testing will be performed using Playwright.

Tests will validate application behavior through user interactions and assertions.

The test suite will cover:

1. Authentication.
2. Product inventory.
3. Product sorting.
4. Shopping cart functionality.

The same UI test scenarios will execute across Chromium, Firefox, and WebKit to identify browser-specific issues.

## 5. Entry Criteria

Testing may begin when:

- The application is accessible.
- Playwright is installed and configured.
- Required browsers are installed.
- Valid test credentials are available.
- Test scripts are available in the project.

## 6. Exit Criteria

Testing is considered successful when:

- All planned test scenarios have executed.
- Expected results match actual results.
- No unresolved test failures remain in the completed test run.
- Test execution results are documented.

## 7. Test Execution Summary

| Test Area | Scenarios | Execution Results |
|---|---:|---|
| Authentication | 3 | Passed |
| Product Inventory and Sorting | 3 | Passed |
| Shopping Cart | 3 | Passed |
| **Total** | **9** | **27 successful executions** |

The nine UI scenarios were executed across three browser engines, resulting in 27 successful test executions.

## 8. Risks and Considerations

- The public demo application may become unavailable.
- Application changes may affect existing test selectors.
- Browser differences may cause inconsistent behavior.
- Test credentials and application data are controlled by the demo application.

## 9. Deliverables

- Playwright automated UI test scripts.
- Playwright automated API test scripts.
- Postman API testing collection.
- Test execution results.
- Test cases and bug reports.
- GitHub repository containing QA documentation and automation assets.

## 10. Conclusion

This test plan establishes the testing scope, approach, environment, and success criteria for the SauceDemo application.

Testing will focus on functional behavior, repeatability, and cross-browser compatibility.