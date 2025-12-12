import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';
import { CustomWorld } from './custom-world';
import dotenv from 'dotenv';

dotenv.config();

let browser: Browser;

BeforeAll(async function () {
    browser = await chromium.launch({ 
        headless: false,  
        args: ["--start-maximized"] 
    });
});

Before(async function (this: CustomWorld) {
    this.context = await browser.newContext({ viewport: null });
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({ 
            path: `./test-results/screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`,
            fullPage: true 
        });
        await this.attach(screenshot, 'image/png');
    }
    await this.page.close();
    await this.context?.close();
});

AfterAll(async function () {
    await browser.close();
});