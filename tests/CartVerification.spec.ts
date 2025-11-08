import {test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"

test("Verification of the cart", async({page})=>{
    const loginPage: LoginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.loginApplication("standard_user","scecret_sauce");

})