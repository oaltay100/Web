
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionPanelGrid extends Serenity.EntityGrid<InstitutionPanelRow, any> {
        protected getColumnsKey() { return InstitutionPanelColumns.columnsKey; }
        protected getDialogType() { return InstitutionPanelDialog; }
        protected getIdProperty() { return InstitutionPanelRow.idProperty; }
        protected getInsertPermission() { return InstitutionPanelRow.insertPermission; }
        protected getLocalTextPrefix() { return InstitutionPanelRow.localTextPrefix; }
        protected getService() { return InstitutionPanelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}