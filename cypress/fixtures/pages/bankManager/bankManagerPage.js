class bankManagerPage { 

    // Mapeo de los objetos
    constructor(){
        this.btnAddCustomer = `button[ng-click='addCust()']`;
        this.btnOpenAccount = `button[ng-click='openAccount()']`;
        this.btnCustomers = `button[ng-click='showCust()']`;
    }

    // Metodos
    goAddCustomer = () => {
        cy.get(this.btnAddCustomer).click();
    }

    goOpenAccount = () => {
        cy.get(this.btnOpenAccount).click();
    }

    goCustomers = () => {
        cy.get(this.btnCustomers).click();
    }
}

export default new bankManagerPage()