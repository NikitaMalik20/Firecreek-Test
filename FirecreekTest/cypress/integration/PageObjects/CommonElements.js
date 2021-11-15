class CommonElements {

    getSearchTextbox() {
        return cy.get('#_q')
    }
    getSearchButton() {
        return cy.get('.submit > .btn')
    }

}
export default CommonElements