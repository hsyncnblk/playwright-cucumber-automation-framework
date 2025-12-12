import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
    constructor(page: Page) { super(page); }

    async login() {
        await this.page.goto(process.env.BASE_URL as string);
        await this.fillText('#user-name', process.env.STANDARD_USER as string);
        await this.fillText('#password', process.env.PASSWORD as string);
        await this.clickElement('#login-button');
    }
}
