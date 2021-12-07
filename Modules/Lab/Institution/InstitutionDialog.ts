
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionDialog extends Serenity.EntityDialog<InstitutionRow, any> {
        protected getFormKey() { return InstitutionForm.formKey; }
        protected getIdProperty() { return InstitutionRow.idProperty; }
        protected getLocalTextPrefix() { return InstitutionRow.localTextPrefix; }
        protected getNameProperty() { return InstitutionRow.nameProperty; }
        protected getService() { return InstitutionService.baseUrl; }
        protected getDeletePermission() { return InstitutionRow.deletePermission; }
        protected getInsertPermission() { return InstitutionRow.insertPermission; }
        protected getUpdatePermission() { return InstitutionRow.updatePermission; }

        protected form = new InstitutionForm(this.idPrefix);

    }
}