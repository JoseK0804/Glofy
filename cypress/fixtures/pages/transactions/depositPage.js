class depositPage { 

    // Mapeo de los objetos
    constructor(){
        this.selectAccount = `#accountSelect`;
        this.inputAmount = `input[placeholder='amount']`;
        this.btnDeposit = `button[type='submit']`;
        this.txtDepositSuccessful = `.error`;
    };

    // Metodos
    selectedAccount = (account) => {
        cy.get(this.selectAccount).should("be.visible").select(account).should('have.value', account);
    };

    deposit = (amount) => {
        cy.get(this.inputAmount).should("be.visible").type(amount);
        cy.get(this.btnDeposit).should("be.visible").click();
        cy.get(this.txtDepositSuccessful).should("be.visible").should('have.text', 'Deposit Successful'); // Validar que se realizo el deposito 
    };
};

export default new depositPage();