
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class LaboratoryGrid extends Serenity.EntityGrid<LaboratoryRow, any> {
        protected getColumnsKey() { return LaboratoryColumns.columnsKey; }
        protected getDialogType() { return LaboratoryDialog; }
        protected getIdProperty() { return LaboratoryRow.idProperty; }
        protected getInsertPermission() { return LaboratoryRow.insertPermission; }
        protected getLocalTextPrefix() { return LaboratoryRow.localTextPrefix; }
        protected getService() { return LaboratoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}