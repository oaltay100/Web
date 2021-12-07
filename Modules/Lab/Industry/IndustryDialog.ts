
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class IndustryDialog extends Serenity.EntityDialog<IndustryRow, any> {
        protected getFormKey() { return IndustryForm.formKey; }
        protected getIdProperty() { return IndustryRow.idProperty; }
        protected getLocalTextPrefix() { return IndustryRow.localTextPrefix; }
        protected getNameProperty() { return IndustryRow.nameProperty; }
        protected getService() { return IndustryService.baseUrl; }
        protected getDeletePermission() { return IndustryRow.deletePermission; }
        protected getInsertPermission() { return IndustryRow.insertPermission; }
        protected getUpdatePermission() { return IndustryRow.updatePermission; }

        protected form = new IndustryForm(this.idPrefix);

    }
}