context("Home page", () => {
  it("Confirm somo elements in the home page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Login");
    cy.contains("Register");
  });
});
