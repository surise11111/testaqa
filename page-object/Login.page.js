export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailFiled = page.locator('[id="login-email"]');
        this.passwordFiled = page.locator('[id="login-password"]');
        this.loginBtn = page.locator('[id="login-button"]');
        this.catalogTitle = page.locator('[id="catalog-title"]');
    } 


    async login(email, password){
        await this.emailFiled.fill(email);
        await this.passwordFiled.fill(password);
        await this.loginBtn.click();
        await this.catalogTitle.waitFor();
        await this.page.pause();
        //await this.page.pause();
    }


}