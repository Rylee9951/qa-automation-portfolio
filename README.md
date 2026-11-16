# QA Automation Portfolio

A hands-on Quality Assurance portfolio demonstrating automated UI testing, REST API testing, test planning, defect reporting, and continuous integration.

## Technologies Used

- **Playwright** — Automated browser and API testing
- **TypeScript** — Test automation scripting
- **Postman** — REST API testing and assertions
- **GitHub Actions** — Continuous integration
- **Git & GitHub** — Version control

## Applications Under Test

### SauceDemo

Website: https://www.saucedemo.com/

Automated UI testing covers:

- Successful login
- Invalid login credentials
- Empty login credentials
- Product inventory visibility
- Product count validation
- Product price sorting
- Adding products to the cart
- Verifying cart contents
- Removing products from the cart

**Coverage:** 9 automated UI scenarios executed across Chromium, Firefox, and WebKit.

### JSONPlaceholder

Website: https://jsonplaceholder.typicode.com/

Automated API testing covers:

- Retrieving a post by ID
- Filtering posts by user ID
- Creating a post
- Retrieving a nonexistent post
- Retrieving comments for an existing post
- Retrieving comments for a nonexistent post

**Coverage:** 6 automated API scenarios.

JSONPlaceholder simulates write operations without permanently modifying server data.

## Postman API Testing

A Postman collection provides additional API validation for GET, POST, PATCH, and DELETE requests.

- 5 saved API requests
- 17 passing assertions
- Status code validation
- Response body validation
- Response structure and data validation

Collection: `postman/jsonplaceholder.postman_collection.json`

## Running the Tests

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm ci
npx playwright install
```

### Run all tests

```bash
npx playwright test
```

### Run UI tests

```bash
npx playwright test tests/ui
```

### Run API tests

```bash
npx playwright test tests/api
```

### View the Playwright HTML report

```bash
npx playwright show-report
```

## Continuous Integration

GitHub Actions runs the Playwright automation suite using the repository's workflow configuration.

Workflow file: `.github/workflows/playwright.yml`

The workflow provides automated test execution and feedback on supported repository events.

## QA Documentation

- [Test Plan](docs/test-plan.md)
- [Test Cases](docs/test-cases.md)
- [Defect Report Examples](docs/bug-reports.md)

The defect reports are simulated examples for demonstrating QA documentation practices. They are not confirmed defects in SauceDemo.

## Project Highlights

- Developed automated browser tests using Playwright and TypeScript
- Implemented REST API validation with Playwright and Postman
- Executed UI tests across three browser engines
- Created structured test plans, test cases, and simulated defect reports
- Investigated and resolved a deliberately introduced test assertion failure
- Integrated automated testing with GitHub Actions

## Future Improvements

- Expand negative and edge-case test coverage
- Introduce reusable test fixtures and page objects
- Add additional API validation scenarios
- Improve CI test reporting and artifact management