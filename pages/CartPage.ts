import { Locator, Page} from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly cartItemLabel: Locator
}