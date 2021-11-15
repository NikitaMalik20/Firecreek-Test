//type definitions for Cypress object "cy"
/// <reference types ="Cypress" />

import LoginPage from '../PageObjects/LoginPage'
import DashboardPage from '../PageObjects/DashboardPage'
import PropertiesPage from '../PageObjects/PropertiesPage'
import AddPropertyPage from '../PageObjects/AddPropertyPage'
import UnitSettingsPage from '../PageObjects/UnitSettingsPage'
import TasksPage from '../PageObjects/TasksPage'
import AddTasksPage from '../PageObjects/AddTasksPage'
import NotificationsSection from '../PageObjects/NotificationsSection'
import CommonElements from '../PageObjects/CommonElements'

//Pull data of existing account on AUT
before(function () {
    cy.fixture('example').then(function (data) {
        this.data = data;
    })
})

describe('Firecreek Test', function () {

    const login = new LoginPage()
    const dashBoard = new DashboardPage()
    const properties = new PropertiesPage()
    const addProp = new AddPropertyPage()
    const unitSetting = new UnitSettingsPage()
    const tasks = new TasksPage()
    const addTask = new AddTasksPage()
    const notif = new NotificationsSection()
    const comElement = new CommonElements()

    beforeEach('Test Scenario 1 - Login to system', function () {

        //Verify response body and compare it with expected
        cy.request(Cypress.env('stagingUrl')).should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
        })

        //Open a browser and enter URL
        cy.visit(Cypress.env('stagingUrl'))
        cy.url().should('include', 'arthuronline')

        //Verify user is on login page
        cy.url().should('include', 'login')

        //Enter login credentials
        login.getEmail().type(this.data.Email)
        login.getPassword().type(this.data.Password)

        //Click on Login button
        login.getLoginButton().contains('Log in').should('be.visible').click()
        cy.wait(4000)
    })

    it('Test Scenario 2 - Add a property with a multiple rentable units', function () {
        //User logged into AUT already
        cy.url().should('include', 'dashboard')

        //Click on Properties dropdown on the left-hand panel
        dashBoard.getCollapseNavigation().click()
        dashBoard.getPropertiesOption().click()
        cy.url().should('include', 'properties')

        //Click on the Add property button on the property index page
        properties.getAddPropertyButton().click()
        cy.wait(3000)

        //Select Property with a multiple rentable units option
        addProp.getMultipleRentable().click()

        //Enter data in all required fields
        addProp.getPropertyName().type('Test Name')
        addProp.getPropertyOwner().click()
        addProp.getPropertyOwnerSelection().click()
        addProp.getAddress1().type('Test Address')
        addProp.getAddress2().type('Address part 2')
        addProp.getPostcode().type(123456)
        addProp.getCity().type('London')
        addProp.getCounty().type('London')

        //Make sure that the “I manage this Property” checkbox is ticked
        addProp.getManageThisPropertyCheckbox().check().should('be.checked')

        //Select number of rentable units more than 1
        addProp.getNumOfRentableUnits().focus().clear().type(2)
        cy.wait(2000)

        //Click on "Next,Unit Settings" button
        addProp.getNextUnitSettingsButton().click({ force: true })
        cy.wait(2000)

        //Select all fields under Unit Settings section
        unitSetting.getUnitSettingsUnitType().should('be.visible').select('Flat')
        unitSetting.getUnitSettingsManager().click()
        unitSetting.getManagerSelection().click()
        unitSetting.getUnitSettingsLettingAgent().click()
        unitSetting.getLettingAgentSelection().click()
        unitSetting.getCertificateTypes().type('Deposit')
        unitSetting.getCertificateTypesSelection().contains('Deposit').click()
        unitSetting.getUnitOneUnitType().select('Bed')
        unitSetting.getUnitOneUnitOwner().should('be.visible').select('Owner 1 - Sansiri')
        unitSetting.getUnitOnePropertyManager().select('Cypress Tester 1')
        unitSetting.getUnitOneLettingAgent().select('Real Agency')
        unitSetting.getUnitTwoUnitType().select('Commercial')
        unitSetting.getUnitTwoUnitOwner().select('Owner 1 - Sansiri')
        unitSetting.getUnitTwoPropertyManager().select('Cypress Tester 1')
        unitSetting.getUnitTwoLettingAgent().select('Real Agency')
        cy.wait(2000)

        //Click on Add Property button
        unitSetting.getAddPropertyButton().click({ force: true })

        //Verify property with multiple units is successfully added
        cy.get('.well > :nth-child(1)').should('include.text', 'Test Name')

        //Re-click on Properties dropdown from the left-hand panel
        dashBoard.getCollapseNavigation().click()
        dashBoard.getPropertiesOption().click()
        cy.wait(2000)

        //Validate that the property created is visible on properties index page
        comElement.getSearchTextbox().type('Test Name')
        comElement.getSearchButton().click()
        cy.wait(2000)
        properties.getPropertyPresentOnIndexPage().should('include.text', 'Test Name')
    })

    it('Test Scenario 3 - Add a task related to above property', function () {
        //User logged into AUT already
        cy.url().should('include', 'dashboard')

        //Property already added as per scenario 2
        dashBoard.getCollapseNavigation().click()
        dashBoard.getPropertiesOption().click()
        comElement.getSearchTextbox().type('Test Name')
        comElement.getSearchButton().click()
        cy.wait(2000)
        properties.getPropertyPresentOnIndexPage().should('include.text', 'Test Name')

        //Click on Tasks dropdown on the left-hand panel to view the task index page
        dashBoard.getCollapseNavigation().click()
        dashBoard.getTasksOption().click()
        cy.wait(3000)

        //Click on Add Task Button
        tasks.getAddTaskButton().click()
        cy.wait(3000)

        //Relate this task to the property created from scenario 2
        addTask.getRelateToProperty().should('be.visible').click()
        addTask.getInputToRelateToProperty().type('Test Name')
        cy.wait(3000)
        addTask.getSelectProperty().contains('Test Name').click()

        //cypress-wait-until plugin
        cy.waitUntil(() => true);

        //Enter data in all the required fields 
        addTask.getTaskDescription().type('Task description-test')
        addTask.getTaskDueDate().type('20/11/2021')
        addTask.getTaskTimeDue().type('15:00')
        addTask.getAssignTo().click()
        addTask.getAssignToSelection().click()
        addTask.getTaskType().should('be.visible').select('Maintenance')

        //cypress-file-upload plugin
        cy.get('.area').attachFile('sample.png', { subjectType: "drag-n-drop" })
        cy.get('.img-thumbnail > img').should('be.visible')
        cy.wait(2000)

        //Click on Save Task Button
        addTask.getSaveTaskButton().click()
        cy.wait(4000)

        //Redirected to the task view page of the newly created task
        cy.url().should('include', 'tasks/view')

        //Validate that a task record related to property(from Scenario 2) has been successfully created
        cy.get('.data-item-relationship > :nth-child(1)').contains('Test Name')

        //Click on Task dropdown from the left-hand panel
        dashBoard.getCollapseNavigation().click()
        dashBoard.getTasksOption().click()
        cy.wait(3000)

        //Validate that the task just created is visible on the task index page
        comElement.getSearchTextbox().type('Test Name')
        comElement.getSearchButton().click()
        cy.wait(4000)
        tasks.getCreatedTaskNameVisible().should('include.text', 'Test Name')
        tasks.getCreatedTaskTypeVisible().should('include.text', 'Maintenance')
        tasks.getCreatedTaskAssignToVisible().should('include.text', 'Cypress Tester 1')

        //Validate that a task just created is visible on Dashboard Notifications section
        dashBoard.getCollapseNavigation().click()
        dashBoard.getNotification().click()
        notif.getTaskCreatedNotif().should('include.text', 'new task')
    })
})