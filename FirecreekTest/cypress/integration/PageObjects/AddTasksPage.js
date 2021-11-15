class AddTasksPage {

    getRelateToProperty() {
        return cy.get('#s2id_TaskRelatedLookupId')
    }

    getInputToRelateToProperty() {
        return cy.get('.select2-search > .select2-input')
    }
    getSelectProperty() {
        return cy.get(':nth-child(1) > .select2-result-label')
    }

    getTaskDescription() {
        return cy.get('#TaskDescription')
    }

    getTaskDueDate() {
        return cy.get('#TaskDateDue')
    }

    getTaskTimeDue() {
        return cy.get('#TaskTimeDue')
    }

    getAssignTo() {
        return cy.get('#s2id_autogen3')
    }

    getAssignToSelection() {
        return cy.get(':nth-child(1) > .select2-result-label')
    }

    getTaskType() {
        return cy.get('[name="data[Task][task_type_id]"]')
    }

    getSaveTaskButton() {
        return cy.get('.btn-success')
    }
}
export default AddTasksPage