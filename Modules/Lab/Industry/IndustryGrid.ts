
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class IndustryGrid extends Serenity.EntityGrid<IndustryRow, any> {
        protected getColumnsKey() { return IndustryColumns.columnsKey; }
        protected getDialogType() { return IndustryDialog; }
        protected getIdProperty() { return IndustryRow.idProperty; }
        protected getInsertPermission() { return IndustryRow.insertPermission; }
        protected getLocalTextPrefix() { return IndustryRow.localTextPrefix; }
        protected getService() { return IndustryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}