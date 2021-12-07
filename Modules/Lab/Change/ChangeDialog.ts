
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ChangeDialog extends Serenity.EntityDialog<ChangeRow, any> {
        protected getFormKey() { return ChangeForm.formKey; }
        protected getIdProperty() { return ChangeRow.idProperty; }
        protected getLocalTextPrefix() { return ChangeRow.localTextPrefix; }
        protected getNameProperty() { return ChangeRow.nameProperty; }
        protected getService() { return ChangeService.baseUrl; }
        protected getDeletePermission() { return ChangeRow.deletePermission; }
        protected getInsertPermission() { return ChangeRow.insertPermission; }
        protected getUpdatePermission() { return ChangeRow.updatePermission; }

        protected form = new ChangeForm(this.idPrefix);

    }
}