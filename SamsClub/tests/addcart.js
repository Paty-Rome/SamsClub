import { Selector } from "testcafe";
import { ADDCART, CREDENTIALS } from "../data/constrants";
import addcartPage from "../pages/addcartPage";
import mainPage from "../pages/mainPage";
import newaccountPage from "../pages/newaccountPage";

fixture `Samsclub cart`
    .page `https://www.sams.com.mx/login`;


test ('Adding item to the cart', async t =>{
    await t
        .click(mainPage.closeWindow)
        .typeText(newaccountPage.emailInput,CREDENTIALS.USER_INFO.MAIL)
        .typeText(newaccountPage.psswdInput,CREDENTIALS.USER_INFO.PSSWD)
        .click(addcartPage.loginButton)
        .click(addcartPage.searchClick)
        .typeText(addcartPage.searchInput,ADDCART.CART.ITEM)
        .pressKey("enter")
        .click(addcartPage.addItem)
        .click(addcartPage.cart)
        .expect(Selector('.item-name').innerText).contains("Mermelada Member's Mark de Fresa 1.2 kg")
})



