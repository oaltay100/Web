
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ReferenceGrid extends Serenity.EntityGrid<ReferenceRow, any> {
        protected getColumnsKey() { return ReferenceColumns.columnsKey; }
        protected getDialogType() { return ReferenceDialog; }
        protected getIdProperty() { return ReferenceRow.idProperty; }
        protected getInsertPermission() { return ReferenceRow.insertPermission; }
        protected getLocalTextPrefix() { return ReferenceRow.localTextPrefix; }
        protected getService() { return ReferenceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}