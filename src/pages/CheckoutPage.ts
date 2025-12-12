import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class CheckoutPage extends BasePage {
    private selectors = {
        cartIcon: '.shopping_cart_link',
        checkoutBtn: '#checkout',
        firstName: '#first-name',
        lastName: '#last-name',
        zip: '#postal-code',
        continueBtn: '#continue',
        finishBtn: '#finish',
        completeHeader: '.complete-header'
    };

    constructor(page: Page) {
        super(page);
    }

    async addProductAndGoToCart(productName: string) {
        const slug = productName.toLowerCase().replace(/\s+/g, '-');
        
        await this.clickElement(`[data-test="add-to-cart-${slug}"]`);
        
        await this.clickElement(this.selectors.cartIcon);
        await this.clickElement(this.selectors.checkoutBtn);
    }

    async fillForm(fName: string, lName: string, zip: string) {
        await this.fillText(this.selectors.firstName, fName);
        await this.fillText(this.selectors.lastName, lName);
        await this.fillText(this.selectors.zip, zip);
        await this.clickElement(this.selectors.continueBtn);
    }

    async finishOrder() {
        await this.clickElement(this.selectors.finishBtn);
    }

    async verifySuccessMessage(msg: string) {
        await expect(this.page.locator(this.selectors.completeHeader)).toContainText(msg);
    }
}