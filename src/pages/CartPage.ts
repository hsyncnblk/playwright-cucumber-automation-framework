import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class CartPage extends BasePage {
    private selectors = {
        cartItemName: '.inventory_item_name',
        removeButtonPrefix: '[data-test="remove-',
        cartItem: '.cart_item',
        cartBadge: '.shopping_cart_badge'
    };

    constructor(page: Page) {
        super(page);
    }

    async verifyItemInCart(productName: string) {
        const item = this.page.locator(this.selectors.cartItemName, { hasText: productName });
        await expect(item).toBeVisible();
    }

    async removeItem(productName: string) {
        const slug = productName.toLowerCase().replace(/\s+/g, '-');
        await this.clickElement(`${this.selectors.removeButtonPrefix}${slug}"]`);
    }

    async verifyCartIsEmpty() {
        const items = this.page.locator(this.selectors.cartItem);
        await expect(items).toHaveCount(0);
    }

    async verifyCartBadgeHidden() {
        const badge = this.page.locator(this.selectors.cartBadge);
        await expect(badge).toBeHidden();
    }
}