import { Selector,t } from "testcafe";

class AddtoCart{

    constructor(){
        this.loginButton = Selector('#buttonBlue')
        this.searchClick = Selector('#searchBox')
        this.searchInput = Selector('#searchBox')
        this.addItem = Selector('#addToCart').withText('Agregar')
        this.cart = Selector('#header-cart')

    }
}

export default new AddtoCart();