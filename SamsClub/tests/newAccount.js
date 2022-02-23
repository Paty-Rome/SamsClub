import { Selector } from "testcafe"
import mainPage from "../pages/mainPage";
import newaccountPage from '../pages/newaccountPage';  
import { CREDENTIALS } from "../data/constrants";


fixture `SamsClub`
    .page `https://www.sams.com.mx/registro`; 

test ('Creating new account', async t =>{
    await t 
    .click(mainPage.closeWindow)
    .click(mainPage.dismissButton)
    .typeText(newaccountPage.emailInput,CREDENTIALS.USER_INFO.MAIL)
    .typeText(newaccountPage.confirmailInput,CREDENTIALS.USER_INFO.CONFIRMAIL)
    .typeText(newaccountPage.psswdInput,CREDENTIALS.USER_INFO.PSSWD)
    .typeText(newaccountPage.mobilenumberInput,CREDENTIALS.USER_INFO.MOBILE)
    .typeText(newaccountPage.firstnameInput,CREDENTIALS.USER_INFO.FIRSTNAME)
    .typeText(newaccountPage.lastNameInput,CREDENTIALS.USER_INFO.LASTNAME)
    .click(newaccountPage.createButton)
    .expect(Selector('.first-row').innerText).contains(`Hola, ${CREDENTIALS.USER_INFO.FIRSTNAME}`)

})
