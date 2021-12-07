
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DeviceGrid extends Serenity.EntityGrid<DeviceRow, any> {
        protected getColumnsKey() { return DeviceColumns.columnsKey; }
        protected getDialogType() { return DeviceDialog; }
        protected getIdProperty() { return DeviceRow.idProperty; }
        protected getInsertPermission() { return DeviceRow.insertPermission; }
        protected getLocalTextPrefix() { return DeviceRow.localTextPrefix; }
        protected getService() { return DeviceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}