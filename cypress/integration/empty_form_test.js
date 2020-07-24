describe("Test empty form", () => {
    it("Tries to submit the form with empty fields.", () => {
        cy.visit("index.html");
        cy.contains("Submit").click();
    })
})
