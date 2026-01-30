import { expect } from "@playwright/test";
import { loginPageClass } from "../pages/loginPage";
import { dashboardPageClass } from "../pages/dashboardPage";
import { test } from "../fixtures/fixture";


test('Perform login: VALID credentials', async ({ page, userValid }) => {
    const loginPage = new loginPageClass(page);
    const dashboardPage = new dashboardPageClass(page);

    await loginPage.goto();
    const titleActual = await page.title();
    await expect(titleActual).toEqual(loginPage.titleExpected);

    await loginPage.enterCredentials(userValid.user, userValid.pass);

    await expect(dashboardPage.buttonUserProfile).toBeVisible();
    
});