describe("Test Form Validation", () => {
    it("Tries to submit invalid form data to test the current validation.", () => {
        cy.visit("index.html");
        cy.get("[name=name]")
            .type("adfisuoiupoiupoiuvvyyzxcvhuhb 321h ua8pdo@ oihoiudhsfiuhoiuhb 88d9 paqewariuowiudsiofvuhxczuyv87979vctv6c8sdr92.......");
        cy.get("[name=email]")
            .type("Not an email string.");
        cy.get("[name=password]")
            .type("shorty");
        cy.get("[name=terms]").click();
        cy.contains("Submit").click();
    })
})
