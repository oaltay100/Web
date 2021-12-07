
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class PatientDialog extends Serenity.EntityDialog<PatientRow, any> {
        protected getFormKey() { return PatientForm.formKey; }
        protected getIdProperty() { return PatientRow.idProperty; }
        protected getLocalTextPrefix() { return PatientRow.localTextPrefix; }
        protected getNameProperty() { return PatientRow.nameProperty; }
        protected getService() { return PatientService.baseUrl; }
        protected getDeletePermission() { return PatientRow.deletePermission; }
        protected getInsertPermission() { return PatientRow.insertPermission; }
        protected getUpdatePermission() { return PatientRow.updatePermission; }

        protected form = new PatientForm(this.idPrefix);

    }
}