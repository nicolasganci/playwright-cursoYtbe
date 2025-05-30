import { test } from '@playwright/test';
import { landingPage } from '../pages/landingPage';
import {signupPage} from '../pages/signupPage';


let landingPage: landingPage;
let signupPage: signupPage;

test('C-1 - Register Happy path', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
