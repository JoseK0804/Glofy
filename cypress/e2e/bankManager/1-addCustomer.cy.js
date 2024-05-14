/// <reference types="Cypress"/>

// Importar las paginas

import homePage from "../../fixtures/pages/homePage.js";
import bankManagerPage from "../../fixtures/pages/bankManager/bankManagerPage.js";
import addCustomersPage from "../../fixtures/pages/bankManager/addCustomerPage.js";

describe(`Set de pruebas de la funcionabilidad añadir cliente`, ()=> {

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
    it(`CP001 - Añadir cliente exitosamente`, ()=> {
        homePage.goBankManagerLogin();
        bankManagerPage.goAddCustomer();
        addCustomersPage.fillForm("José", "Aguilar", "1210");
        addCustomersPage.assertCustomerAddedOK();
    });

    it(`CP002 - Intentar añadir un cliente que ya existe`, ()=> {
        homePage.goBankManagerLogin();
        bankManagerPage.goAddCustomer();
        addCustomersPage.fillForm("Hermoine", "Granger", "E859AB");
        addCustomersPage.assertDuplicateCustomer();
    });
});