
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionPanelAssayDialog extends Serenity.EntityDialog<InstitutionPanelAssayRow, any> {
        protected getFormKey() { return InstitutionPanelAssayForm.formKey; }
        protected getIdProperty() { return InstitutionPanelAssayRow.idProperty; }
        protected getLocalTextPrefix() { return InstitutionPanelAssayRow.localTextPrefix; }
        protected getService() { return InstitutionPanelAssayService.baseUrl; }
        protected getDeletePermission() { return InstitutionPanelAssayRow.deletePermission; }
        protected getInsertPermission() { return InstitutionPanelAssayRow.insertPermission; }
        protected getUpdatePermission() { return InstitutionPanelAssayRow.updatePermission; }

        protected form = new InstitutionPanelAssayForm(this.idPrefix);

    }
}