import {expect, test} from "../fixtures/UtilsFixtures"

test("Cart verification using page fixtures", async({page, loginPage, homePage})=>{
    await loginPage.openApplication();
    await page.waitForTimeout(3000);
    await loginPage.loginApplication();
    
    await expect(homePage.pageHeadingLabel).toHaveText("Swag Labs");
    await homePage.addToCart();
    
    
})