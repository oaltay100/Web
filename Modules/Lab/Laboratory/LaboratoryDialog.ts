
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class LaboratoryDialog extends Serenity.EntityDialog<LaboratoryRow, any> {
        protected getFormKey() { return LaboratoryForm.formKey; }
        protected getIdProperty() { return LaboratoryRow.idProperty; }
        protected getLocalTextPrefix() { return LaboratoryRow.localTextPrefix; }
        protected getNameProperty() { return LaboratoryRow.nameProperty; }
        protected getService() { return LaboratoryService.baseUrl; }
        protected getDeletePermission() { return LaboratoryRow.deletePermission; }
        protected getInsertPermission() { return LaboratoryRow.insertPermission; }
        protected getUpdatePermission() { return LaboratoryRow.updatePermission; }

        protected form = new LaboratoryForm(this.idPrefix);

    }
}