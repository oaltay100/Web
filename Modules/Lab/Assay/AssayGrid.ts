
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AssayGrid extends Serenity.EntityGrid<AssayRow, any> {
        protected getColumnsKey() { return AssayColumns.columnsKey; }
        protected getDialogType() { return AssayDialog; }
        protected getIdProperty() { return AssayRow.idProperty; }
        protected getInsertPermission() { return AssayRow.insertPermission; }
        protected getLocalTextPrefix() { return AssayRow.localTextPrefix; }
        protected getService() { return AssayService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}