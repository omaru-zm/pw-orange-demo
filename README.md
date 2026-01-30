# 1. Playwright E2E tests demo

Practice project: End-to-end test automation using Playwright. Target app: Admin dashboard app (OrangeHRM demo website).

## 2. Tech Stack

- Playwright/test
- Typescript
- dotenv

## 3. Prerequisites

- NodeJS
- npm

# 4. Installation

Commands to run in CLI:
```bash
git clone https://github.com/omaru-zm/pw-orange-demo.git
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

Run specific test in headed mode (visible browser):
```bash
npx playwright test --<path_to_test_file> --headed
```

## 6. Environment variables

Environment variables to be set in .env file.

Currently, it describes values to be used for user authentication within the tests (user/passwords).

See .env.example file.



