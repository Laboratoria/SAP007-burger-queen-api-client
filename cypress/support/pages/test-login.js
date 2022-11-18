const BTN_LOGAR = ".button_btnLogin__KbeUN";
const USER_EMAIL = '[type="email"]';
const USER_PASSWORD = '[type="password"]';

class loginTest {
  // static loginByTest() {
  //   cy.visit("/");
  // }

  static btnLogin() {
    cy.get(BTN_LOGAR).click();
  }

  static userCredentials(user) {
    if (user == "waiter") {
      cy.get(USER_EMAIL).type("agora@vai.com");
      cy.get(USER_PASSWORD).type("123456");
    } else {
      cy.get(USER_EMAIL).type("argos@teste.com");
      cy.get(USER_PASSWORD).type("123456");
    }
  }
}

export default loginTest;
