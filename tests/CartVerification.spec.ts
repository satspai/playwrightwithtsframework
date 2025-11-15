import {expect, test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage";

test.skip("Verification of the cart", async({page})=>{
    const loginPage: LoginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.loginApplication("standard_user","secret_sauce");
    const homePage = new HomePage(page);
    await expect(homePage.pageHeadingLabel).toHaveText("Swag Labs");
    await homePage.addToCart();
    await expect(homePage.cartIcon).toHaveText("1");
    await homePage.goToCart();
})