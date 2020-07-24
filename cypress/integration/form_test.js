describe("Enter Valid Name", () => {
    it("Enters a user name into the name field.", () => {
        cy.visit("index.html");
        cy.get("[name=name]")
        .type("John");
    })
})

describe("Check Name Field", () => {
    it("Ensures that the name field contains the specified string.", () => {
        cy.get("[name=name]")
        .should($name => {
            expect($name).to.contain("John");
        })
    })
})

describe("Enter Valid Email", () => {
    it("Enters a valid email string into the email field.", () => {
        cy.get("[name=email]")
        .type("fakeemail@example.com");
        })
})

describe("Enter Password", () => {
    it("Enters a valid password string into the password field.", () => {
        cy.get("[name=password]")
        .type("fakepassword");
    })
})

describe("Check Terms Checkbox", () => {
    it("Checks the terms and conditions checkbox to true.", () => {
        cy.get("[name=terms]").click();
    })
})

describe("Submit Form", () => {
    it("Clicks the submit button after form data is input.", () => {
        cy.contains("Submit").click();
    })
})
