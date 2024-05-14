class customersPage { 

    // Mapeo de los objetos
    constructor(){
        this.inputSearch = `input[placeholder='Search Customer']`;
        this.btnDelete = `button[ng-click='deleteCust(cust)']`;;
    };

    // Metodos
    deleteCustomer = (customer) => {
        cy.get(this.inputSearch).should("be.visible").type(customer);
        cy.get(this.btnDelete).should("be.visible").click();
    };
};

export default new customersPage();