import { Locator, Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly userNameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.userNameTextBox = page.locator("id=user-name");
        this.passwordTextBox = page.locator("id=password");
        this.loginButton = page.locator("id=login-button");
    }

    async openApplication () {
        await this.page.goto('https://saucedemo.com/');

    }

    async loginToOrngeHrm(userNameVal: string, passwordVal: string) {
        this.userNameTextBox.fill(userNameVal);
        this.passwordTextBox.fill(passwordVal);
        this.loginButton.click();
    }

} 