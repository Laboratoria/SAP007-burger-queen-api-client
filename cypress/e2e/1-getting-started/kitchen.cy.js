import loginTest from "../../support/pages/test-login";
describe("kitchen page", () => {
  beforeEach(() => {
    cy.visit("/");
    loginTest.userCredentials();
    loginTest.btnLogin();
    cy.wait(1000)
  });

  it("screenshots the page", () => {
    //aguarda a pagina carregar pra depois fazer screenshot
    cy.visit("http://localhost:3000/kitchen");
    cy.wait(10000)
    //tira o print da página("restaurante") toda
    cy.argosScreenshot();
  });
});
