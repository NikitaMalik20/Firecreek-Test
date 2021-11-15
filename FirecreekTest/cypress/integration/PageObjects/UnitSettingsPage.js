class UnitSettingsPage {

    getUnitSettingsUnitType() {
        return cy.get('[name="data[Prefix][Unit][unit_type_id]"]')
    }

    getUnitSettingsManager() {
        return cy.get('#s2id_PrefixUnitUnitManagerManagerPersonId > .select2-choice > span')
    }

    getManagerSelection() {
        return cy.get(':nth-child(2) > .select2-result-label')
    }

    getUnitSettingsLettingAgent() {
        return cy.get('#s2id_PrefixUnitUnitAgentEntityId > .select2-choice')
    }

    getLettingAgentSelection() {
        return cy.get(':nth-child(2) > .select2-result-label')
    }

    getCertificateTypes() {
        return cy.get('#s2id_RequiredCertificateMultiUnitUnitRequiredCertificateTypeIds')
    }

    getCertificateTypesSelection() {
        return cy.get('.select2-results').find('li span')
    }

    getUnitOneUnitType() {
        return cy.get('.multi-unit-table > tbody > :nth-child(1) > :nth-child(2) > .input > #MultiUnitIdUnitUnitTypeId')
    }

    getUnitOneUnitOwner() {
        return cy.get('#MultiUnitIdUnitOwnerId')
    }

    getUnitOnePropertyManager() {
        return cy.get('.multi-unit-table > tbody > :nth-child(1) > :nth-child(4) > .input > #MultiUnitIdUnitManagerManagerPersonId')
    }

    getUnitOneLettingAgent() {
        return cy.get('.multi-unit-table > tbody > :nth-child(1) > :nth-child(5) > .input > #MultiUnitIdUnitAgentEntityId')
    }

    getUnitTwoUnitType() {
        return cy.get(':nth-child(2) > :nth-child(2) > .input > #MultiUnitIdUnitUnitTypeId')
    }

    getUnitTwoUnitOwner() {
        return cy.get(':nth-child(2) > :nth-child(3) > .input > #MultiUnitIdUnitOwnerId')
    }

    getUnitTwoPropertyManager() {
        return cy.get(':nth-child(2) > :nth-child(4) > .input > #MultiUnitIdUnitManagerManagerPersonId')
    }

    getUnitTwoLettingAgent() {
        return cy.get(':nth-child(2) > :nth-child(5) > .input > #MultiUnitIdUnitAgentEntityId')
    }

    getAddPropertyButton() {
        return cy.get('.next > .submit')
    }
}
export default UnitSettingsPage