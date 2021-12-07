
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DetailGrid extends Serenity.EntityGrid<DetailRow, any> {
        protected getColumnsKey() { return DetailColumns.columnsKey; }
        protected getDialogType() { return DetailDialog; }
        protected getIdProperty() { return DetailRow.idProperty; }
        protected getInsertPermission() { return DetailRow.insertPermission; }
        protected getLocalTextPrefix() { return DetailRow.localTextPrefix; }
        protected getService() { return DetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}