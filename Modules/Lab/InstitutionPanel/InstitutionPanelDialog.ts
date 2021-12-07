
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionPanelDialog extends Serenity.EntityDialog<InstitutionPanelRow, any> {
        protected getFormKey() { return InstitutionPanelForm.formKey; }
        protected getIdProperty() { return InstitutionPanelRow.idProperty; }
        protected getLocalTextPrefix() { return InstitutionPanelRow.localTextPrefix; }
        protected getNameProperty() { return InstitutionPanelRow.nameProperty; }
        protected getService() { return InstitutionPanelService.baseUrl; }
        protected getDeletePermission() { return InstitutionPanelRow.deletePermission; }
        protected getInsertPermission() { return InstitutionPanelRow.insertPermission; }
        protected getUpdatePermission() { return InstitutionPanelRow.updatePermission; }

        protected form = new InstitutionPanelForm(this.idPrefix);

    }
}