
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class LekGrid extends Serenity.EntityGrid<LekRow, any> {
        protected getColumnsKey() { return LekColumns.columnsKey; }
        protected getDialogType() { return LekDialog; }
        protected getIdProperty() { return LekRow.idProperty; }
        protected getInsertPermission() { return LekRow.insertPermission; }
        protected getLocalTextPrefix() { return LekRow.localTextPrefix; }
        protected getService() { return LekService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}