context("Home page", () => {
  it("Confirm somo elements in the home page", () => {
    cy.visit("http://localhost:3000");
    cy.get(".cajGcd").click();
    cy.contains("Sou Dev");
    cy.contains("Sou Empresa");
    cy.get(".sc-gWXaA-D > :nth-child(1)").click();
    cy.contains("Cadastrar");
    cy.visit("http://localhost:3000/preregister");
    cy.get(".sc-gWXaA-D > :nth-child(2)").click();
    cy.contains("Cadastrar");
  });
});
