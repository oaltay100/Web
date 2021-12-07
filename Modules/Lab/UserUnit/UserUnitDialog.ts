
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class UserUnitDialog extends Serenity.EntityDialog<UserUnitRow, any> {
        protected getFormKey() { return UserUnitForm.formKey; }
        protected getIdProperty() { return UserUnitRow.idProperty; }
        protected getLocalTextPrefix() { return UserUnitRow.localTextPrefix; }
        protected getService() { return UserUnitService.baseUrl; }
        protected getDeletePermission() { return UserUnitRow.deletePermission; }
        protected getInsertPermission() { return UserUnitRow.insertPermission; }
        protected getUpdatePermission() { return UserUnitRow.updatePermission; }

        protected form = new UserUnitForm(this.idPrefix);

    }
}