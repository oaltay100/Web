
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class PanelAssayGrid extends Serenity.EntityGrid<PanelAssayRow, any> {
        protected getColumnsKey() { return PanelAssayColumns.columnsKey; }
        protected getDialogType() { return PanelAssayDialog; }
        protected getIdProperty() { return PanelAssayRow.idProperty; }
        protected getInsertPermission() { return PanelAssayRow.insertPermission; }
        protected getLocalTextPrefix() { return PanelAssayRow.localTextPrefix; }
        protected getService() { return PanelAssayService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}