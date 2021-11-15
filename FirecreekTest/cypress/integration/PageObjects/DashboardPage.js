class DashboardPage {

    getCollapseNavigation() {
        return cy.get('#collapseNav')
    }

    getPropertiesOption() {
        return cy.get('.alias-properties.dropdown > [data-left-menu-link="1"]')
    }

    getTasksOption() {
        return cy.get('.alias-tasks.dropdown > [data-left-menu-link="1"]')
    }

    getNotification() {
        return cy.get('.alias-notifications > a')
    }
}
export default DashboardPage
