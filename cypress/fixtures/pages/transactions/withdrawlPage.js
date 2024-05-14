class withdrawlPage { 

    // Mapeo de los objetos
    constructor(){
        this.selectAccount = `#accountSelect`;
        this.inputAmount = `input`;
        this.btnWithdraw = `button[type='submit']`;
        this.txtMessage = `.error`;
    };

    // Metodos
    selectedAccount = (account) => {
        cy.get(this.selectAccount).should("be.visible").select(account).should('have.value', account);
    };

    withdraw  = (amount) => {
        cy.wait(2000);
        cy.get(this.inputAmount).should("be.visible").type(amount);
        cy.get(this.btnWithdraw).should("be.visible").click();
    };

    assertWithdrawOK  = () => {
        cy.get(this.txtMessage).should("be.visible").should('have.text', 'Transaction successful'); // Validar que se realizo el retiro 
    };

    assertTransactionFailed = () => {
        cy.get(this.txtMessage).should("be.visible").should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.'); // Validar que muestra un mensaje de error
    };
};

export default new withdrawlPage();