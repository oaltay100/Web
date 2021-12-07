
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class SampleDialog extends Serenity.EntityDialog<SampleRow, any> {
        protected getFormKey() { return SampleForm.formKey; }
        protected getIdProperty() { return SampleRow.idProperty; }
        protected getLocalTextPrefix() { return SampleRow.localTextPrefix; }
        protected getNameProperty() { return SampleRow.nameProperty; }
        protected getService() { return SampleService.baseUrl; }
        protected getDeletePermission() { return SampleRow.deletePermission; }
        protected getInsertPermission() { return SampleRow.insertPermission; }
        protected getUpdatePermission() { return SampleRow.updatePermission; }

        protected form = new SampleForm(this.idPrefix);

    }
}