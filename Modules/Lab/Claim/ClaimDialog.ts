
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ClaimDialog extends Serenity.EntityDialog<ClaimRow, any> {
        protected getFormKey() { return ClaimForm.formKey; }
        protected getIdProperty() { return ClaimRow.idProperty; }
        protected getLocalTextPrefix() { return ClaimRow.localTextPrefix; }
        protected getNameProperty() { return ClaimRow.nameProperty; }
        protected getService() { return ClaimService.baseUrl; }
        protected getDeletePermission() { return ClaimRow.deletePermission; }
        protected getInsertPermission() { return ClaimRow.insertPermission; }
        protected getUpdatePermission() { return ClaimRow.updatePermission; }

        protected form = new ClaimForm(this.idPrefix);

    }
}