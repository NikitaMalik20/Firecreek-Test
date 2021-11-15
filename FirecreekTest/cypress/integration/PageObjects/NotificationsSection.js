class NotificationsSection {

    getTaskCreatedNotif() {
        return cy.get('[href="/robottester/notifications/view/5376365"] > .noti-container-unread > .message > .message-text')
    }
}
export default NotificationsSection