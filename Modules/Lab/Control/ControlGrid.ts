
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ControlGrid extends Serenity.EntityGrid<ControlRow, any> {
        protected getColumnsKey() { return ControlColumns.columnsKey; }
        protected getDialogType() { return ControlDialog; }
        protected getIdProperty() { return ControlRow.idProperty; }
        protected getInsertPermission() { return ControlRow.insertPermission; }
        protected getLocalTextPrefix() { return ControlRow.localTextPrefix; }
        protected getService() { return ControlService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}