import { expect, type Locator, type Page } from "@playwright/test";

export class dashboardPageClass {
    readonly page: Page;
    readonly buttonUserProfile: Locator;

    constructor (page: Page) {
        this.page = page;
        this.buttonUserProfile = page.locator('.oxd-userdropdown');
    }


}