class openAccountPage { 

    // Mapeo de los objetos
    constructor(){
        this.selectCustomer = `#userSelect`;
        this.selectCurrency = `#currency`;
        this.btnProcess = `button[type='submit']`;
    };

    // Metodos
    fillForm = (customer, currency) => {
        cy.get(this.selectCustomer).should("be.visible").select(customer).should('have.value', customer);
        cy.get(this.selectCurrency).should("be.visible").select(currency).should('have.value', currency);
        cy.get(this.btnProcess).should("be.visible").click();
    };

    // Validar que se abrió la cuenta 
    assertAccountOpenedOK = () => {
        cy.on('window:alert', (str) => {
            expect(str).to.contains(`Account created successfully with account Number :`);
        });
    };
};

export default new openAccountPage();