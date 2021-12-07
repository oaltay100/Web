
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionPanelAssayGrid extends Serenity.EntityGrid<InstitutionPanelAssayRow, any> {
        protected getColumnsKey() { return InstitutionPanelAssayColumns.columnsKey; }
        protected getDialogType() { return InstitutionPanelAssayDialog; }
        protected getIdProperty() { return InstitutionPanelAssayRow.idProperty; }
        protected getInsertPermission() { return InstitutionPanelAssayRow.insertPermission; }
        protected getLocalTextPrefix() { return InstitutionPanelAssayRow.localTextPrefix; }
        protected getService() { return InstitutionPanelAssayService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}