
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionGrid extends Serenity.EntityGrid<InstitutionRow, any> {
        protected getColumnsKey() { return InstitutionColumns.columnsKey; }
        protected getDialogType() { return InstitutionDialog; }
        protected getIdProperty() { return InstitutionRow.idProperty; }
        protected getInsertPermission() { return InstitutionRow.insertPermission; }
        protected getLocalTextPrefix() { return InstitutionRow.localTextPrefix; }
        protected getService() { return InstitutionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}