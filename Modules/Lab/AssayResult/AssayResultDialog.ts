
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AssayResultDialog extends Serenity.EntityDialog<AssayResultRow, any> {
        protected getFormKey() { return AssayResultForm.formKey; }
        protected getIdProperty() { return AssayResultRow.idProperty; }
        protected getLocalTextPrefix() { return AssayResultRow.localTextPrefix; }
        protected getService() { return AssayResultService.baseUrl; }
        protected getDeletePermission() { return AssayResultRow.deletePermission; }
        protected getInsertPermission() { return AssayResultRow.insertPermission; }
        protected getUpdatePermission() { return AssayResultRow.updatePermission; }

        protected form = new AssayResultForm(this.idPrefix);

    }
}