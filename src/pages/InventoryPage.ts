import { BasePage } from './BasePage';
import { Page, expect } from '@playwright/test';

export class InventoryPage extends BasePage {
    private selectors = {
        sortDropdown: '.product_sort_container',
        inventoryItemPrice: '.inventory_item_price',
        inventoryItemName: '.inventory_item_name',
        addToCartPrefix: '[data-test="add-to-cart-',
        cartLink: '.shopping_cart_link'
    };

    constructor(page: Page) {
        super(page);
    }

    async selectSortOption(optionLabel: string) {
        
        const optionMap: { [key: string]: string } = {
            "Price (low to high)": "lohi",
            "Price (high to low)": "hilo",
            "Name (A to Z)": "az"
        };
        await this.page.selectOption(this.selectors.sortDropdown, optionMap[optionLabel]);
    }

    
    async getProductPrices(): Promise<number[]> {
        
        const priceElements = await this.page.$$(this.selectors.inventoryItemPrice);
        const prices: number[] = [];

        for (const el of priceElements) {
            const text = await el.textContent();
            if (text) {
                
                prices.push(parseFloat(text.replace('$', '')));
            }
        }
        return prices;
    }

    async addItemToCart(productName: string) {
        const slug = productName.toLowerCase().replace(/\s+/g, '-');
        const selector = `${this.selectors.addToCartPrefix}${slug}"]`;
        await this.clickElement(selector);
    }

    async goToCart() {
        await this.clickElement(this.selectors.cartLink);
    }
}