import { Selector, t } from "testcafe";


class NewaccountPage{

    constructor(){

        this.firstnameInput = Selector('#firstName')
        this.lastNameInput = Selector('#lastName')
        this.emailInput = Selector('#email')
        this.confirmailInput = Selector('#confirmEmail')
        this.psswdInput = Selector('#password')
        this.mobilenumberInput = Selector('#mobileNumber')
        this.createButton = Selector('#buttonBlue')

    }

    
}

export default new NewaccountPage();