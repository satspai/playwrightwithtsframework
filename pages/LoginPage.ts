import { Locator, Page } from '@playwright/test'
import CommonUtils from '../utils/CommonUtils';

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
        
        await this.page.goto(process.env.BASE_URL);

    }

    async loginApplication() {
        const commonUtils = new CommonUtils();
        const decryptUserName = commonUtils.decryptData(process.env.USER_NAME);
        console.log("Decrypted Username: " + decryptUserName);
        const decryptPassword = commonUtils.decryptData(process.env.PASSWORD);
        await this.userNameTextBox.fill(decryptUserName);
        await this.passwordTextBox.fill(decryptPassword);
        await this.loginButton.click();
    }

} 