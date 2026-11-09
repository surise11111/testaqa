import { expect } from "@playwright/test";

export class CatalogPage {
    constructor(page) {
        this.page = page;
        this.coffeeMachineProduct = page.locator('[id="product-add-6"]');
        this.tabletProduct = page.locator('[id="product-add-5"]');
        this.basketCount = page.locator('[id="cart-count"]');

        this.tabletName = page.locator('[id="product-image-5"]');
        this.coffeeMachineName = page.locator('[id="product-name-6"]');

        this.tabletPrice = page.locator('[id="product-price-5"]');
        this.coffeeMachinePrice = page.locator('[id="product-price-6"]');

        this.tabletNameValue = '';
        this.coffeeMachineNameValue = '';
        this.tabletPriceValue = '';
        this.coffeeMachinePriceValue = '';
    }

    async selectProduct() {
        await this.coffeeMachineProduct.click();
        await this.tabletProduct.click();
        await this.page.waitForTimeout(5000);
        const productQty = await this.basketCount.innerText();
        //await this.page.pause();
        expect (productQty).toBe('2');
        
    }

    async saveProductinfo() {
         this.tabletNameValue = await this.tabletName.innerText();
         this.coffeeMachineNameValue = await this.coffeeMachineName.innerText();
         this.tabletPriceValue = await this.tabletPrice.innerText();
         this.coffeeMachinePriceValue = await this.coffeeMachinePrice.innerText();

        //  console.log(this.tabletNameValue);
        //  console.log(this.coffeeMachineNameValue);
        //  console.log(this.tabletPriceValue);
        //  console.log(this.coffeeMachinePriceValue);
    }
}