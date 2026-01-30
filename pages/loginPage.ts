import {expect, type Locator, type Page} from "@playwright/test"; 

export class loginPageClass {
    readonly page: Page;
    readonly inputUsername: Locator;
    readonly inputPassword: Locator;
    readonly buttonSubmitCreds: Locator;
    readonly titleExpected:string;
    readonly urlDemo = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

    constructor(page: Page) {
        this.page = page;
        this.inputUsername = page.locator('[placeholder=Username]');
        this.inputPassword = page.locator('[placeholder=Password]');
        this.buttonSubmitCreds = page.locator('button[type=submit]');
        this.titleExpected = 'OrangeHRM';
        this.urlDemo = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        
    }

    async goto() {
        await this.page.goto(this.urlDemo);
    }

    /* async enterValidCredentials() {
        await this.inputUsername.fill(this.userValid.user);
        await this.inputPassword.fill(this.userValid.pass);
        await this.buttonSubmitCreds.click();
    } */

    async enterCredentials(username: string, password: string) {
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.buttonSubmitCreds.click();
    }


}