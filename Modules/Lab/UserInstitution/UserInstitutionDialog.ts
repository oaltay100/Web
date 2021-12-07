
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class UserInstitutionDialog extends Serenity.EntityDialog<UserInstitutionRow, any> {
        protected getFormKey() { return UserInstitutionForm.formKey; }
        protected getIdProperty() { return UserInstitutionRow.idProperty; }
        protected getLocalTextPrefix() { return UserInstitutionRow.localTextPrefix; }
        protected getService() { return UserInstitutionService.baseUrl; }
        protected getDeletePermission() { return UserInstitutionRow.deletePermission; }
        protected getInsertPermission() { return UserInstitutionRow.insertPermission; }
        protected getUpdatePermission() { return UserInstitutionRow.updatePermission; }

        protected form = new UserInstitutionForm(this.idPrefix);

    }
}