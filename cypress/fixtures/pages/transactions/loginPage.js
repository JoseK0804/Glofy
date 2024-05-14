class loginPage { 

    // Mapeo de los objetos
    constructor(){
        this.selectCustomer = `#userSelect`;
        this.btnLogin = `button[type='submit']`;
    };

    // Metodos
    login = (customer) => {
        cy.get(this.selectCustomer).should("be.visible").select(customer).should('have.value', customer);
        cy.get(this.btnLogin).should("be.visible").click();
    };
};

export default new loginPage();