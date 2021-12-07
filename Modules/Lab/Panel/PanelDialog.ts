
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class PanelDialog extends Serenity.EntityDialog<PanelRow, any> {
        protected getFormKey() { return PanelForm.formKey; }
        protected getIdProperty() { return PanelRow.idProperty; }
        protected getLocalTextPrefix() { return PanelRow.localTextPrefix; }
        protected getNameProperty() { return PanelRow.nameProperty; }
        protected getService() { return PanelService.baseUrl; }
        protected getDeletePermission() { return PanelRow.deletePermission; }
        protected getInsertPermission() { return PanelRow.insertPermission; }
        protected getUpdatePermission() { return PanelRow.updatePermission; }

        protected form = new PanelForm(this.idPrefix);

    }
}