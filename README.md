# Playwright E2E tests demo

Practice project: End-to-end test automation using Playwright. Target app: Admin dashboard app (OrangeHRM demo website).

## Tech Stack

- Playwright/test
- Typescript
- dotenv

## Prerequisites

- NodeJS
- npm

# Installation

Commands to run in CLI:
```bash
git clone <repo URL>
cd pw-orange-demo
npm install
npx playwright install
```

## 5. Running tests

Before running the Login tests, make sure to setup the environment variables (see section 6 below).

Run all tests:
```bash
npx playwright test
```
Run specific test:
```bash
npx playwright test --<path_to_test_file>
```

Run specific tests in headed mode (visible browser):
```bash
npx playwright test --<path_to_test_file> --headed
```

## 6. Environment variables

Environment variables to be set in .env file.
See .env.example file.



