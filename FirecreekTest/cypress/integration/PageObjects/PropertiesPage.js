class PropertiesPage {

    getAddPropertyButton() {
        return cy.get('.detail > .actions > :nth-child(1) > :nth-child(1) > .btn')
    }

    getPropertyPresentOnIndexPage() {
        return cy.get(':nth-child(1) > .name > .table-info > a')
    }
}
export default PropertiesPage