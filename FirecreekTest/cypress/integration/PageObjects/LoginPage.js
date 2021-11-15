class LoginPage {

    getEmail() {
        return cy.get('#UserEmail')
    }

    getPassword() {
        return cy.get('#UserPassword')
    }

    getLoginButton() {
        return cy.get('input[type="submit"]')
    }

}

export default LoginPage