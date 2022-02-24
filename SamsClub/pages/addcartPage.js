import { Selector,t } from "testcafe";

class AddtoCart{

    constructor(){
        this.loginButton = Selector('#buttonBlue')
        this.searchClick = Selector('#searchBox')
        this.searchInput = Selector('#searchBox')
        this.addItem = Selector('#addToCart').withText('Agregar')
        this.cart = Selector('#header-cart')

    }

    async AddItem(){
        await t.click(this.loginButton)
        await t.click(this.searchClick)
        await t.typeText(this.searchInput)
        await t.click(this.addItem)
        await t.cart(this.cart)
    }
}

export default new AddtoCart();