

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app/#")

        cy.contains("Nova Transação").click()
        cy.get('#description').type("Hora extra")
        cy.get('#amount').type(250)
        cy.get('#date').type("2023-03-07")

        cy.contains('button', 'Salvar').click()

        cy.get("tbody tr td.description").should("have.text", "Hora extra")
            
       


  });
});