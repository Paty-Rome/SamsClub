import { Selector } from "testcafe";
import mainPage  from "../pages/mainPage";

fixture `SamsClub Mexico`
    .page `https://www.sams.com.mx/login`;

test('Create an account', async t =>{
    await t
        .click(mainPage.closeWindow)
        .click(mainPage.registerlink)
        .click(mainPage.dismissButton)
        .expect(Selector('.title').innerText).contains('Crea tu cuenta')
})