
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class LekDialog extends Serenity.EntityDialog<LekRow, any> {
        protected getFormKey() { return LekForm.formKey; }
        protected getIdProperty() { return LekRow.idProperty; }
        protected getLocalTextPrefix() { return LekRow.localTextPrefix; }
        protected getService() { return LekService.baseUrl; }
        protected getDeletePermission() { return LekRow.deletePermission; }
        protected getInsertPermission() { return LekRow.insertPermission; }
        protected getUpdatePermission() { return LekRow.updatePermission; }

        protected form = new LekForm(this.idPrefix);

    }
}