
export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerBtn = page.locator('[id="login-register-button"]');
        this.firstNameFiled = page.locator('[id="register-first-name"]');
        this.lastNameFiled = page.locator('[id="register-last-name"]');
        this.emailFiled = page.locator('[id="register-email"]');
        this.passwordFiled = page.locator('[id="register-password"]');
        this.cityFiled = page.locator('[id="register-city"]');
        this.countryDropDown = page.locator('[id="register-country"]');
        this.phoneFiled = page.locator('[id="register-phone"]');
        this.streetFiled = page.locator('[id="register-street"]');
        this.zipcodeFiled = page.locator('[id="register-zip"]');
        this.submitRegistrarionButton = page.locator('[id="register-button"]');
    } 

    async navigate() {
        await this.page.goto('https://aqa-app.vercel.app/login');
    }

    async fillRegistartionForm(testData) {
        await this.registerBtn.click();
        await this.firstNameFiled.waitFor();
        await this.firstNameFiled.fill(testData.firstName);
        await this.lastNameFiled.waitFor();
        await this.lastNameFiled.fill(testData.lastName);
        await this.emailFiled.waitFor();
        await this.emailFiled.fill(testData.email);
        await this.passwordFiled.waitFor();
        await this.passwordFiled.fill(testData.password);
        await this.cityFiled.waitFor();
        await this.cityFiled.fill(testData.city);
        await this.countryDropDown.waitFor();
        await this.countryDropDown.selectOption(testData.country);
        await this.phoneFiled.waitFor();
        await this.phoneFiled.fill(testData.phoneNumber);
        await this.streetFiled.waitFor();
        await this.streetFiled.fill(testData.streetAddress);
        await this.zipcodeFiled.waitFor();
        await this.zipcodeFiled.fill(testData.zipCode);
        await this.submitRegistrarionButton.waitFor();
        await this.submitRegistrarionButton.click();
    }
}



// import { test } from '@playwright/test';
/*
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


//await page.goto('https://aqa-app.vercel.app/login');

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
