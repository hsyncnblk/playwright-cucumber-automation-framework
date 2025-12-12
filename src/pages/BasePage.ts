import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickElement(selector: string) {
        await this.page.waitForSelector(selector, { state: 'visible' });
        await this.page.click(selector);
    }

    async fillText(selector: string, text: string) {
        await this.page.waitForSelector(selector, { state: 'visible' });
        await this.page.fill(selector, text);
    }
}