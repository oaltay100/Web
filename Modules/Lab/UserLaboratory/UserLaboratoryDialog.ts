
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class UserLaboratoryDialog extends Serenity.EntityDialog<UserLaboratoryRow, any> {
        protected getFormKey() { return UserLaboratoryForm.formKey; }
        protected getIdProperty() { return UserLaboratoryRow.idProperty; }
        protected getLocalTextPrefix() { return UserLaboratoryRow.localTextPrefix; }
        protected getService() { return UserLaboratoryService.baseUrl; }
        protected getDeletePermission() { return UserLaboratoryRow.deletePermission; }
        protected getInsertPermission() { return UserLaboratoryRow.insertPermission; }
        protected getUpdatePermission() { return UserLaboratoryRow.updatePermission; }

        protected form = new UserLaboratoryForm(this.idPrefix);

    }
}