class AddPropertyPage {

    getMultipleRentable() {
        return cy.get('.noselect.multiple-unit')
    }

    getPropertyName() {
        return cy.get('#ProfileAddressName')
    }

    getPropertyOwner() {
        return cy.get('#s2id_PropertyOwnerId > .select2-choice > div > b')
    }

    getPropertyOwnerSelection() {
        return cy.get(':nth-child(2) > .select2-result-label')
    }
    getAddress1() {
        return cy.get('#ProfileAddress1')
    }
    getAddress2() {
        return cy.get('#ProfileAddress2')
    }

    getPostcode() {
        return cy.get('#ProfilePostcode')
    }

    getCity() {
        return cy.get('#ProfileCity')
    }

    getCounty() {
        return cy.get('#ProfileCounty')
    }

    getManageThisPropertyCheckbox() {
        return cy.get('#PropertyFullAccess')
    }

    getNumOfRentableUnits() {
        return cy.get('#PropertyUnitCount')
    }

    getNextUnitSettingsButton() {
        return cy.get('.next-page')
    }
}
export default AddPropertyPage
