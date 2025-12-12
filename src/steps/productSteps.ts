import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

Given('I reset the app state', async function (this: CustomWorld) {
    await this.page.evaluate(() => window.localStorage.clear());
    await this.page.evaluate(() => window.sessionStorage.clear());
    await this.context?.clearCookies();
    await this.page.reload();
});

Given('I am on the inventory page', async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/inventory.html/);
});

When('I sort the products by {string}', async function (this: CustomWorld, sortOption: string) {
    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.selectSortOption(sortOption);
});

Then('The products should be sorted by price in ascending order', async function (this: CustomWorld) {
    const inventoryPage = new InventoryPage(this.page);
    const prices = await inventoryPage.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(JSON.stringify(prices)).toBe(JSON.stringify(sortedPrices));
});

When('I add {string} to the cart', async function (this: CustomWorld, productName: string) {
    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addItemToCart(productName);
});

When('I navigate to cart page', async function (this: CustomWorld) {
    const inventoryPage = new InventoryPage(this.page);
    await inventoryPage.goToCart();
});

Then('I should see {string} in the cart', async function (this: CustomWorld, productName: string) {
    const cartPage = new CartPage(this.page);
    await cartPage.verifyItemInCart(productName);
});

When('I remove {string} from the cart', async function (this: CustomWorld, productName: string) {
    const cartPage = new CartPage(this.page);
    await cartPage.removeItem(productName);
});

Then('The cart should be empty', async function (this: CustomWorld) {
    const cartPage = new CartPage(this.page);
    await cartPage.verifyCartIsEmpty();
});

Then('The cart badge should not be visible', async function (this: CustomWorld) {
    const cartPage = new CartPage(this.page);
    await cartPage.verifyCartBadgeHidden();
});