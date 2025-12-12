import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { LoginPage } from '../pages/LoginPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrderService } from '../api/OrderService';

Given('I am logged in to the application', async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login();
});

Given('I add {string} to the cart and proceed to checkout', async function (this: CustomWorld, productName: string) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.addProductAndGoToCart(productName);
});

When('I fill the checkout form with {string}, {string} and {string}', 
async function (this: CustomWorld, fn: string, ln: string, zip: string) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.fillForm(fn, ln, zip);
});

When('I finish the order', async function (this: CustomWorld) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.finishOrder();
});

Then('I should see the {string} message on UI', async function (this: CustomWorld, msg: string) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.verifySuccessMessage(msg);
});

Then('The order status should be {string} in the Database', async function (this: CustomWorld, status: string) {
    const apiContext = this.page.request;
    const orderService = new OrderService(apiContext);
    await orderService.verifyOrderStatus("ORD-123", status);
});