import {expect, type Locator, type Page} from "@playwright/test"; 

export class loginPageClass {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly buttonSubmitCreds: Locator;
    readonly errorInvalidCreds: Locator;
    readonly titleExpected:string;
    readonly urlDemo = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

    constructor(page: Page) {
        this.page = page;
        this.inputUsername = page.locator('[name=username]');
        this.inputPassword = page.locator('[name=password]');
        this.buttonSubmitCreds = page.locator('button[type=submit]');
        this.errorInvalidCreds = page.locator('.oxd-alert-content-text');

        this.titleExpected = 'OrangeHRM';
        this.urlDemo = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        
    }

    async goto() {
        await this.page.goto(this.urlDemo);
    }

    async enterCredentials(username: string, password: string) {
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.buttonSubmitCreds.click();
    }


}