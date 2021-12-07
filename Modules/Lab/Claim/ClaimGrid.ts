
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ClaimGrid extends Serenity.EntityGrid<ClaimRow, any> {
        protected getColumnsKey() { return ClaimColumns.columnsKey; }
        protected getDialogType() { return ClaimDialog; }
        protected getIdProperty() { return ClaimRow.idProperty; }
        protected getInsertPermission() { return ClaimRow.insertPermission; }
        protected getLocalTextPrefix() { return ClaimRow.localTextPrefix; }
        protected getService() { return ClaimService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}