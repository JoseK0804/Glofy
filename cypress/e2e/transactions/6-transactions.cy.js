/// <reference types="Cypress"/>

// Importar las paginas

import homePage from "../../fixtures/pages/homePage.js";
import loginPage from "../../fixtures/pages/transactions/loginPage.js";
import accountPage from "../../fixtures/pages/transactions/accountPage.js";
import depositPage from "../../fixtures/pages/transactions/depositPage.js";
import withdrawlPage from "../../fixtures/pages/transactions/withdrawlPage.js";
import transactionsPage from "../../fixtures/pages/transactions/transactionsPage.js";

describe(`Set de pruebas de la funcionabilidad reiniciar transacciones`, ()=> {

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
    it(`CP008 - Realizar reinicio de transacciones exitosamente `, ()=> {
        homePage.goCustomerLogin();
        loginPage.login("2"); // Se tiene que pasar el value del cliente que queremos elegir
        accountPage.goDeposit();
        depositPage.selectedAccount("number:1006");
        depositPage.deposit("200");
        accountPage.goWithdrawl();
        withdrawlPage.selectedAccount("number:1006");
        withdrawlPage.withdraw("200");
        withdrawlPage.assertWithdrawOK();
        accountPage.goTransactions();
        transactionsPage.resetTransactions();
        transactionsPage.goBack();
    });
});