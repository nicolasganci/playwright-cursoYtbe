import {Page, Locator} from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;  
  readonly confirmPasswordInput: Locator;
  readonly registerInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByTestId('nameInput');
    this.emailInput = page.getByTestId('emailInput');
    this.passwordInput = page.getByTestId('passwordInput');
    this.confirmPasswordInput = page.getByTestId('confirmpasswordInput');
    this.registerInput = page.getByTestId('botonRegistro');
  }
}
