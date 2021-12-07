
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ControlDialog extends Serenity.EntityDialog<ControlRow, any> {
        protected getFormKey() { return ControlForm.formKey; }
        protected getIdProperty() { return ControlRow.idProperty; }
        protected getLocalTextPrefix() { return ControlRow.localTextPrefix; }
        protected getNameProperty() { return ControlRow.nameProperty; }
        protected getService() { return ControlService.baseUrl; }
        protected getDeletePermission() { return ControlRow.deletePermission; }
        protected getInsertPermission() { return ControlRow.insertPermission; }
        protected getUpdatePermission() { return ControlRow.updatePermission; }

        protected form = new ControlForm(this.idPrefix);

    }
}