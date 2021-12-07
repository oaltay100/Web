
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class PanelAssayDialog extends Serenity.EntityDialog<PanelAssayRow, any> {
        protected getFormKey() { return PanelAssayForm.formKey; }
        protected getIdProperty() { return PanelAssayRow.idProperty; }
        protected getLocalTextPrefix() { return PanelAssayRow.localTextPrefix; }
        protected getService() { return PanelAssayService.baseUrl; }
        protected getDeletePermission() { return PanelAssayRow.deletePermission; }
        protected getInsertPermission() { return PanelAssayRow.insertPermission; }
        protected getUpdatePermission() { return PanelAssayRow.updatePermission; }

        protected form = new PanelAssayForm(this.idPrefix);

    }
}