
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class SutGrid extends Serenity.EntityGrid<SutRow, any> {
        protected getColumnsKey() { return SutColumns.columnsKey; }
        protected getDialogType() { return SutDialog; }
        protected getIdProperty() { return SutRow.idProperty; }
        protected getInsertPermission() { return SutRow.insertPermission; }
        protected getLocalTextPrefix() { return SutRow.localTextPrefix; }
        protected getService() { return SutService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}