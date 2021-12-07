
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class CodeGrid extends Serenity.EntityGrid<CodeRow, any> {
        protected getColumnsKey() { return CodeColumns.columnsKey; }
        protected getDialogType() { return CodeDialog; }
        protected getIdProperty() { return CodeRow.idProperty; }
        protected getInsertPermission() { return CodeRow.insertPermission; }
        protected getLocalTextPrefix() { return CodeRow.localTextPrefix; }
        protected getService() { return CodeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}