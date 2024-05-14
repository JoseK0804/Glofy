class accountPage { 

    // Mapeo de los objetos
    constructor(){
        this.btnDeposit = `button[ng-click='deposit()']`;
        this.btnWithdrawl = `button[ng-click='withdrawl()']`;
        this.btnTransactions = `button[ng-click='transactions()']`;
    };

    // Metodos
    goDeposit = () => {
        cy.get(this.btnDeposit).click();
    };

    goWithdrawl = () => {
        cy.get(this.btnWithdrawl).click();
    };

    goTransactions = () => {
        cy.get(this.btnTransactions).click();
    };
};

export default new accountPage();