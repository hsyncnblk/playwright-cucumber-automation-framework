import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class CheckoutPage extends BasePage {
    constructor(page: Page) { super(page); }

    async addProductAndGoToCart() {
        await this.clickElement('[data-test="add-to-cart-sauce-labs-backpack"]');
        await this.clickElement('.shopping_cart_link');
        await this.clickElement('#checkout');
    }

    async fillForm(fName: string, lName: string, zip: string) {
        await this.fillText('#first-name', fName);
        await this.fillText('#last-name', lName);
        await this.fillText('#postal-code', zip);
        await this.clickElement('#continue');
    }

    async finishOrder() {
        await this.clickElement('#finish');
    }

    async verifySuccessMessage(msg: string) {
        await expect(this.page.locator('.complete-header')).toContainText(msg);
    }
}