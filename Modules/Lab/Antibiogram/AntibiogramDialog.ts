
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AntibiogramDialog extends Serenity.EntityDialog<AntibiogramRow, any> {
        protected getFormKey() { return AntibiogramForm.formKey; }
        protected getIdProperty() { return AntibiogramRow.idProperty; }
        protected getLocalTextPrefix() { return AntibiogramRow.localTextPrefix; }
        protected getNameProperty() { return AntibiogramRow.nameProperty; }
        protected getService() { return AntibiogramService.baseUrl; }
        protected getDeletePermission() { return AntibiogramRow.deletePermission; }
        protected getInsertPermission() { return AntibiogramRow.insertPermission; }
        protected getUpdatePermission() { return AntibiogramRow.updatePermission; }

        protected form = new AntibiogramForm(this.idPrefix);

    }
}