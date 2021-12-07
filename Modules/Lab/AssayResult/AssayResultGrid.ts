
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AssayResultGrid extends Serenity.EntityGrid<AssayResultRow, any> {
        protected getColumnsKey() { return AssayResultColumns.columnsKey; }
        protected getDialogType() { return AssayResultDialog; }
        protected getIdProperty() { return AssayResultRow.idProperty; }
        protected getInsertPermission() { return AssayResultRow.insertPermission; }
        protected getLocalTextPrefix() { return AssayResultRow.localTextPrefix; }
        protected getService() { return AssayResultService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}