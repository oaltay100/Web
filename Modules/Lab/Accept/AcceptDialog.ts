
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AcceptDialog extends Serenity.EntityDialog<AcceptRow, any> {
        protected getFormKey() { return AcceptForm.formKey; }
        protected getIdProperty() { return AcceptRow.idProperty; }
        protected getLocalTextPrefix() { return AcceptRow.localTextPrefix; }
        protected getService() { return AcceptService.baseUrl; }
        protected getDeletePermission() { return AcceptRow.deletePermission; }
        protected getInsertPermission() { return AcceptRow.insertPermission; }
        protected getUpdatePermission() { return AcceptRow.updatePermission; }

        protected form = new AcceptForm(this.idPrefix);

    }
}