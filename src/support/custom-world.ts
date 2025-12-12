import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { BrowserContext, Page, APIRequestContext } from '@playwright/test';

export interface ICustomWorld extends World {
  context?: BrowserContext;
  page: Page;
  api?: APIRequestContext;
}

export class CustomWorld extends World implements ICustomWorld {
  context?: BrowserContext;
  page!: Page;
  api?: APIRequestContext;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);