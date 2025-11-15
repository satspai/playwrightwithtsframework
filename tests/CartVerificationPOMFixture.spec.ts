import {expect, test} from "../fixtures/POMFixtures"

test("Cart verification using page fixtures", async({page, loginPage, homePage})=>{
    await loginPage.openApplication();
    await loginPage.loginApplication("standard_user","secret_sauce");
    await expect(homePage.pageHeadingLabel).toHaveText("Swag Labs");
    await homePage.addToCart();

})