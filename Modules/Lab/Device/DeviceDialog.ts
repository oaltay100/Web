
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DeviceDialog extends Serenity.EntityDialog<DeviceRow, any> {
        protected getFormKey() { return DeviceForm.formKey; }
        protected getIdProperty() { return DeviceRow.idProperty; }
        protected getLocalTextPrefix() { return DeviceRow.localTextPrefix; }
        protected getNameProperty() { return DeviceRow.nameProperty; }
        protected getService() { return DeviceService.baseUrl; }
        protected getDeletePermission() { return DeviceRow.deletePermission; }
        protected getInsertPermission() { return DeviceRow.insertPermission; }
        protected getUpdatePermission() { return DeviceRow.updatePermission; }

        protected form = new DeviceForm(this.idPrefix);

    }
}