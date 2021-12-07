
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DoctorDialog extends Serenity.EntityDialog<DoctorRow, any> {
        protected getFormKey() { return DoctorForm.formKey; }
        protected getIdProperty() { return DoctorRow.idProperty; }
        protected getLocalTextPrefix() { return DoctorRow.localTextPrefix; }
        protected getNameProperty() { return DoctorRow.nameProperty; }
        protected getService() { return DoctorService.baseUrl; }
        protected getDeletePermission() { return DoctorRow.deletePermission; }
        protected getInsertPermission() { return DoctorRow.insertPermission; }
        protected getUpdatePermission() { return DoctorRow.updatePermission; }

        protected form = new DoctorForm(this.idPrefix);

    }
}