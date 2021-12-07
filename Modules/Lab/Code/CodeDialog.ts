
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class CodeDialog extends Serenity.EntityDialog<CodeRow, any> {
        protected getFormKey() { return CodeForm.formKey; }
        protected getIdProperty() { return CodeRow.idProperty; }
        protected getLocalTextPrefix() { return CodeRow.localTextPrefix; }
        protected getNameProperty() { return CodeRow.nameProperty; }
        protected getService() { return CodeService.baseUrl; }
        protected getDeletePermission() { return CodeRow.deletePermission; }
        protected getInsertPermission() { return CodeRow.insertPermission; }
        protected getUpdatePermission() { return CodeRow.updatePermission; }

        protected form = new CodeForm(this.idPrefix);

    }
}