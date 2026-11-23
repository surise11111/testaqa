import { test , devices } from '@playwright/test';
import { RegisterPage } from '../page-object/RegisterPage.page';
import { LoginPage } from '../page-object/Login.page';
import { newUser1 } from '../data/testData';
import { CatalogPage } from '../page-object/catalog.page';


test.use({
  viewport: { width: 800, height: 600 },
  actionTimeout: 10 * 1000,
  navigationTimeout: 10 * 1000,
});

test.describe('E2E: order flow', () => {

  test.beforeAll(async () => {
     console.log('beforeAll: prepare test data');
     console.log('beforeAll: generate users');
     console.log('beforeAll: ready');
  });

  test.beforeEach(async () => {
     console.log('beforeEach: preconditions');    
  })

  test.afterEach(async ({page}, testInfo) => {
      if (testInfo.status !== testInfo.expectedStatus) {
        console.log(`afterEach: test failed: ${testInfo.title}`);

        await page.screenshot( {
          path: `test-results/${testInfo.title}-failed.png`,
          fullPage: true,
        })
      }
  })

  test.afterAll(async () => {
    console.log('afterAll; clean up test data');
  })


  test('test', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const catalogPage = new CatalogPage(page);

  await registerPage.navigate();
  await registerPage.fillRegistartionForm(newUser1);
  await loginPage.login(newUser1.email, newUser1.password);
  await catalogPage.selectProduct();

  //1
});


})



/*
import { test } from '@playwright/test';

test('test', async ({ page }) => {
  const registerBtn = page.locator('[id="login-register-button"]');
  const firstNameFiled = page.locator('[id="register-first-name"]');
  const lastNameFiled = page.locator('[id="register-last-name"]');
  const emailFiled = page.locator('[id="register-email"]');
  const passwordFiled = page.locator('[id="register-password"]');
  const cityFiled = page.locator('[id="register-city"]');
  const countryDropDown = page.locator('[id="register-country"]');
  const phoneFiled = page.locator('[id="register-phone"]');
  const streetFiled = page.locator('[id="register-street"]');
  const zipcodeFiled = page.locator('[id="register-zip"]');
  const submitRegistrarionButton = page.locator('[id="register-button"]');


  await page.goto('/login');
  await registerBtn.waitFor();
  await registerBtn.click();
  await firstNameFiled.waitFor();
  await firstNameFiled.fill('Rose');
  await lastNameFiled.waitFor();
  await lastNameFiled.fill('Geller');
  await emailFiled.waitFor();
  await emailFiled.fill('test@test.com');
  await passwordFiled.waitFor();
  await passwordFiled.fill('123456');
  await cityFiled.waitFor();
  await cityFiled.fill('Lviv');

  await countryDropDown.waitFor();
  await countryDropDown.selectOption('Ukraine');

  await phoneFiled.waitFor();
  await phoneFiled.fill('+380666666666');
  await streetFiled.waitFor();
  await streetFiled.fill('Germana 15');
  await zipcodeFiled.waitFor();
  await zipcodeFiled.fill('45654');
  await submitRegistrarionButton.waitFor();
  await submitRegistrarionButton.click();
  
});
*/