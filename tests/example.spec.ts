import { test, expect } from '@playwright/test';
import LandingPage from '../pages/landingPage';
import SignupPage from '../pages/signupPage';


test('C-1 - Register Happy path ', async ({ page }) => {
  await page.goto('https://playwright.dev/');

});
