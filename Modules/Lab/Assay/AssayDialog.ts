
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AssayDialog extends Serenity.EntityDialog<AssayRow, any> {
        protected getFormKey() { return AssayForm.formKey; }
        protected getIdProperty() { return AssayRow.idProperty; }
        protected getLocalTextPrefix() { return AssayRow.localTextPrefix; }
        protected getNameProperty() { return AssayRow.nameProperty; }
        protected getService() { return AssayService.baseUrl; }
        protected getDeletePermission() { return AssayRow.deletePermission; }
        protected getInsertPermission() { return AssayRow.insertPermission; }
        protected getUpdatePermission() { return AssayRow.updatePermission; }

        protected form = new AssayForm(this.idPrefix);

    }
}