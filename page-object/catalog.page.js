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
        const itemsInfo = await this.getProductinfo();
        //await this.page.pause();
        expect (productQty).toBe('2');
        return itemsInfo;
        
    }

    async getProductinfo() {
         return {
            firstProduct: {
                name: await this.tabletName.innerText(),
                price: await this.tabletPrice.innerText(),
            },

            secondProduct: {
                name: await this.coffeeMachineName.innerText(),
                price: await this.coffeeMachinePrice.innerText(),
            }
         
    
         }

    }
}