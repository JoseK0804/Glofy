class homePage { 

    // Mapeo de los objetos
    constructor(){
        this.btnCustomerLogin = `button[ng-click='customer()']`;
        this.btnBankManagerLogin = `button[ng-click='manager()']`;
    };

    // Metodos
    goCustomerLogin = () => {
        cy.get(this.btnCustomerLogin).click();
    };

    goBankManagerLogin = () => {
        cy.get(this.btnBankManagerLogin).click();
    };
};

export default new homePage();