class transactionsPage { 

    // Mapeo de los objetos
    constructor(){
        this.btnReset = `.btn[ng-show='showDate']`;
        this.btnBack = `button[ng-click='back()']`;
    };

    // Metodos
    resetTransactions = () => {
        cy.get(this.btnReset).should("be.visible").click();
    };

    // Metodos
    goBack = () => {
        cy.get(this.btnBack).should("be.visible").click();
    };
};

export default new transactionsPage();