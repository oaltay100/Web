
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DetailDialog extends Serenity.EntityDialog<DetailRow, any> {
        protected getFormKey() { return DetailForm.formKey; }
        protected getIdProperty() { return DetailRow.idProperty; }
        protected getLocalTextPrefix() { return DetailRow.localTextPrefix; }
        protected getNameProperty() { return DetailRow.nameProperty; }
        protected getService() { return DetailService.baseUrl; }
        protected getDeletePermission() { return DetailRow.deletePermission; }
        protected getInsertPermission() { return DetailRow.insertPermission; }
        protected getUpdatePermission() { return DetailRow.updatePermission; }

        protected form = new DetailForm(this.idPrefix);

    }
}