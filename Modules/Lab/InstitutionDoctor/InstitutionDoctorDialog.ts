
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionDoctorDialog extends Serenity.EntityDialog<InstitutionDoctorRow, any> {
        protected getFormKey() { return InstitutionDoctorForm.formKey; }
        protected getIdProperty() { return InstitutionDoctorRow.idProperty; }
        protected getLocalTextPrefix() { return InstitutionDoctorRow.localTextPrefix; }
        protected getService() { return InstitutionDoctorService.baseUrl; }
        protected getDeletePermission() { return InstitutionDoctorRow.deletePermission; }
        protected getInsertPermission() { return InstitutionDoctorRow.insertPermission; }
        protected getUpdatePermission() { return InstitutionDoctorRow.updatePermission; }

        protected form = new InstitutionDoctorForm(this.idPrefix);

    }
}