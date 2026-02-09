import { expect } from "@playwright/test";
import { loginPageClass } from "../pages/loginPage";
import { dashboardPageClass } from "../pages/dashboardPage";
import { test } from "../fixtures/fixture";
import { UserOptions } from "../fixtures/fixture";



const credentialKeys: (keyof UserOptions)[] = [
    'userValid',
    'userInvalid'
];

for (const key of credentialKeys) {
    test(`Perform login with user type: ${key}`, async ({userValid, userInvalid, page}) => {
        const credentialsMap = { userValid, userInvalid};
        const credentials = credentialsMap[key];

        console.log(`Testing with: ${credentials.type}`);
        console.log(`Credentials: ${credentials.user} and ${credentials.pass}`);

        const loginPage = new loginPageClass(page);
        const dashboardPage = new dashboardPageClass(page);

        await loginPage.goto();
        const titleActual = await page.title();
        await expect(titleActual).toEqual(loginPage.titleExpected);

        await loginPage.enterCredentials(credentials.user, credentials.pass);

        if (key == 'userValid') {
            await expect(dashboardPage.buttonUserProfile).toBeVisible();
        }
        else if (key == 'userInvalid') {
            await expect(loginPage.errorInvalidCreds).toBeVisible();
        }
    });
}


