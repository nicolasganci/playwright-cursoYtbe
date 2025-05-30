import {Page, Locator} from '@playwright/test';

export class landingPage {
  readonly page: Page;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registerButton = page.getByRole('link', {name: 'Registrarse'}).first(); 
  }
}