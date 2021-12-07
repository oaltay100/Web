
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class MaterialDialog extends Serenity.EntityDialog<MaterialRow, any> {
        protected getFormKey() { return MaterialForm.formKey; }
        protected getIdProperty() { return MaterialRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialRow.localTextPrefix; }
        protected getNameProperty() { return MaterialRow.nameProperty; }
        protected getService() { return MaterialService.baseUrl; }
        protected getDeletePermission() { return MaterialRow.deletePermission; }
        protected getInsertPermission() { return MaterialRow.insertPermission; }
        protected getUpdatePermission() { return MaterialRow.updatePermission; }

        protected form = new MaterialForm(this.idPrefix);

    }
}