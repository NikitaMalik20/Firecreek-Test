class TasksPage {

    getAddTaskButton() {
        return cy.get('.detail > .actions > :nth-child(1) > :nth-child(1) > .btn')
    }

    getCreatedTaskNameVisible() {
        return cy.get('[data-task-id="1102882"] > .name > .table-info > :nth-child(2) > .no-popup-icon')
    }

    getCreatedTaskTypeVisible() {
        return cy.get('[data-task-id="1102882"] > .task-type-name > .table-info > :nth-child(2)')
    }

    getCreatedTaskAssignToVisible() {
        return cy.get('[data-task-id="1102882"] > .created > .table-info > .no-popup-icon > div')
    }
}

export default TasksPage