
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ChangeGrid extends Serenity.EntityGrid<ChangeRow, any> {
        protected getColumnsKey() { return ChangeColumns.columnsKey; }
        protected getDialogType() { return ChangeDialog; }
        protected getIdProperty() { return ChangeRow.idProperty; }
        protected getInsertPermission() { return ChangeRow.insertPermission; }
        protected getLocalTextPrefix() { return ChangeRow.localTextPrefix; }
        protected getService() { return ChangeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}