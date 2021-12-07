
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class SutDialog extends Serenity.EntityDialog<SutRow, any> {
        protected getFormKey() { return SutForm.formKey; }
        protected getIdProperty() { return SutRow.idProperty; }
        protected getLocalTextPrefix() { return SutRow.localTextPrefix; }
        protected getNameProperty() { return SutRow.nameProperty; }
        protected getService() { return SutService.baseUrl; }
        protected getDeletePermission() { return SutRow.deletePermission; }
        protected getInsertPermission() { return SutRow.insertPermission; }
        protected getUpdatePermission() { return SutRow.updatePermission; }

        protected form = new SutForm(this.idPrefix);

    }
}