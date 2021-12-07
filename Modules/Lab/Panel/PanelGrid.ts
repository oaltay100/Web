
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class PanelGrid extends Serenity.EntityGrid<PanelRow, any> {
        protected getColumnsKey() { return PanelColumns.columnsKey; }
        protected getDialogType() { return PanelDialog; }
        protected getIdProperty() { return PanelRow.idProperty; }
        protected getInsertPermission() { return PanelRow.insertPermission; }
        protected getLocalTextPrefix() { return PanelRow.localTextPrefix; }
        protected getService() { return PanelService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}