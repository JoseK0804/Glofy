class addCustomersPage { 

    // Mapeo de los objetos
    constructor(){
        this.inputFirstName = `input[placeholder='First Name']`;
        this.inputLastName = `input[placeholder='Last Name']`;
        this.inputPostalCode = `input[placeholder='Post Code']`;
        this.btnAddCustomer = `button[type='submit']`;
    };

    // Metodos
    fillForm = (firstName, lastName, postalCode) => {
        cy.get(this.inputFirstName).should("be.visible").type(firstName);
        cy.get(this.inputLastName).should("be.visible").type(lastName);
        cy.get(this.inputPostalCode).should("be.visible").type(postalCode);
        cy.get(this.btnAddCustomer).should("be.visible").click();
    };
    
    // Cerrar alert
    closeAlert = () => {
        cy.on('window:confirm', (str) => {
            expect(str).to.contains(`Customer`);
        });
    };

    // Validar que se creo el usuario con el alert
    assertCustomerAddedOK = () => {
        cy.on('window:alert', (str) => {
            expect(str).to.contains(`Customer added successfully with customer id`);
        });
    };

    // Validar que el usuario ya existe con el alert
    assertDuplicateCustomer = () => {
        cy.on('window:alert', (str) => {
            expect(str).to.eql(`Please check the details. Customer may be duplicate.`);
        });
    };
};

export default new addCustomersPage();