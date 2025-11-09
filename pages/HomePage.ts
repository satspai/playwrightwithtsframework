import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly pageHeadingLabel: Locator;
    readonly addToCartButton: Locator;
    readonly removeButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page){
        this.page=page;
        this.pageHeadingLabel = page.getByText('Swag Labs');
        this.addToCartButton =page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async removeFromCart() {
        await this.removeButton.click();
    }

    async goToCart(){
        await this.cartIcon.click();
    }
}