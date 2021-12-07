
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DescriptionDialog extends Serenity.EntityDialog<DescriptionRow, any> {
        protected getFormKey() { return DescriptionForm.formKey; }
        protected getIdProperty() { return DescriptionRow.idProperty; }
        protected getLocalTextPrefix() { return DescriptionRow.localTextPrefix; }
        protected getNameProperty() { return DescriptionRow.nameProperty; }
        protected getService() { return DescriptionService.baseUrl; }
        protected getDeletePermission() { return DescriptionRow.deletePermission; }
        protected getInsertPermission() { return DescriptionRow.insertPermission; }
        protected getUpdatePermission() { return DescriptionRow.updatePermission; }

        protected form = new DescriptionForm(this.idPrefix);

    }
}