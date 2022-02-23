import { Selector, t } from "testcafe";

class MainPage{
    constructor(){
        this.closeWindow = Selector('.smx-dialog-close')
        this.registerlink = Selector('a[href="/registro"]').withText('Registrarse')
        this.dismissButton = Selector('.full-btn').withText('Entendido')
    }

    
}


export default new MainPage();
