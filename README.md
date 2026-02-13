# 1. Playwright E2E tests demo

Practice project: End-to-end test automation using Playwright. Target app: Admin dashboard app (OrangeHRM demo website).

## 2. Tech Stack

- Playwright/test
- Typescript
- dotenv

## 3. Prerequisites

- NodeJS
- npm

## 4. Installation

Commands to run in CLI:
```bash
git clone https://github.com/omaru-zm/pw-orange-demo.git
cd pw-orange-demo
npm install
npx playwright install
```

## 5. Environment variables

Environment variables to be set in .env file.

Currently, it describes:

- Values to be used for user authentication within the tests (user/passwords).
- URLs for different environments (prod, dev)

Use .env.example file as a base to create your own local .env file:
```bash
cp .env.example .env
```

Then open in text editor and adjust proper values as required.


## 6. Running tests

Before running the Login tests, make sure to setup the environment variables (see section 5 above).

Run all tests in prod URL:
```bash
TARGET_ENV='prod' npx playwright test
```
Run specific test (prod):
```bash
TARGET_ENV='prod' npx playwright test path/to/test_file
```
Run specific test (prod) on specific browser:
```bash
TARGET_ENV='prod' npx playwright test path/to/test_file --project=chromium
```
Run specific test in headed mode (visible browser) (dev):
```bash
TARGET_ENV='dev' npx playwright test path/to/test_file --headed
```




