
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AcceptGrid extends Serenity.EntityGrid<AcceptRow, any> {
        protected getColumnsKey() { return AcceptColumns.columnsKey; }
        protected getDialogType() { return AcceptDialog; }
        protected getIdProperty() { return AcceptRow.idProperty; }
        protected getInsertPermission() { return AcceptRow.insertPermission; }
        protected getLocalTextPrefix() { return AcceptRow.localTextPrefix; }
        protected getService() { return AcceptService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}