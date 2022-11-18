import loginTest from "../../support/pages/test-login";
describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
    loginTest.userCredentials("waiter");
    loginTest.btnLogin();
  });

  it("screenshots the page", () => {
    //aguarda a pagina carregar pra depois fazer screenshot
    cy.wait(5000);
    cy.visit("http://localhost:3000/hall");

    //tira o print da página("restaurante") toda
    cy.argosScreenshot();
  });
});
