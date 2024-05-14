/// <reference types="Cypress"/>

// Importar las paginas

import homePage from "../../fixtures/pages/homePage.js";
import bankManagerPage from "../../fixtures/pages/bankManager/bankManagerPage.js";
import customersPage from "../../fixtures/pages/bankManager/customersPage.js";


describe(`Set de pruebas de la funcionabilidad eliminar cuentas`, ()=> {

    before(()=> {
        cy.log(`Empieza el set de pruebas`);
    })

    after(()=> {
        cy.log(`Termina el set de pruebas`);
    })

    beforeEach(()=> {
        cy.log(`Empezo el test`);
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit(`https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login`);
        cy.viewport(1440, 1000);
    })

    afterEach(()=> {
        cy.log(`Se termino el test`);
    })

    ///////////////////////////////////////////////////// TESTS /////////////////////////////////////////////////////
    it(`CP004 - Eliminar cliente exitosamente`, ()=> {
        homePage.goBankManagerLogin();
        bankManagerPage.goCustomers();
        customersPage.deleteCustomer("Longbottom"); // Buscar cliente por nomrbre o apellido
    });
});