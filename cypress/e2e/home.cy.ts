describe("home spec", () => {
  it("the h1 contains the correct test", () => {
    cy.visit("http://localhost:3000")
    cy.get("h1")
      .should("be.visible")
      .contains("Testing Next.js Applications with Cypress")
  })
})
