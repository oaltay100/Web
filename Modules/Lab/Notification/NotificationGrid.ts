
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class NotificationGrid extends Serenity.EntityGrid<NotificationRow, any> {
        protected getColumnsKey() { return NotificationColumns.columnsKey; }
        protected getDialogType() { return NotificationDialog; }
        protected getIdProperty() { return NotificationRow.idProperty; }
        protected getInsertPermission() { return NotificationRow.insertPermission; }
        protected getLocalTextPrefix() { return NotificationRow.localTextPrefix; }
        protected getService() { return NotificationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}