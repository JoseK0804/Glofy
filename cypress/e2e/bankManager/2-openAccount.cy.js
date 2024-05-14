/// <reference types="Cypress"/>

// Importar las paginas

import homePage from "../../fixtures/pages/homePage.js";
import bankManagerPage from "../../fixtures/pages/bankManager/bankManagerPage.js";
import openAccountPage from "../../fixtures/pages/bankManager/openAccountPage.js";

describe(`Set de pruebas de la funcionabilidad abrir cuentas`, ()=> {

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
    it(`CP003 - Añadir cuenta exitosamente`, ()=> {
        homePage.goBankManagerLogin();
        bankManagerPage.goOpenAccount();
        openAccountPage.fillForm("1", "Dollar"); // Se tiene que pasar el value de la opción que queremos elegir 
        openAccountPage.assertAccountOpenedOK();
    });
});