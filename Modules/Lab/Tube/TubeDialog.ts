
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class TubeDialog extends Serenity.EntityDialog<TubeRow, any> {
        protected getFormKey() { return TubeForm.formKey; }
        protected getIdProperty() { return TubeRow.idProperty; }
        protected getLocalTextPrefix() { return TubeRow.localTextPrefix; }
        protected getNameProperty() { return TubeRow.nameProperty; }
        protected getService() { return TubeService.baseUrl; }
        protected getDeletePermission() { return TubeRow.deletePermission; }
        protected getInsertPermission() { return TubeRow.insertPermission; }
        protected getUpdatePermission() { return TubeRow.updatePermission; }

        protected form = new TubeForm(this.idPrefix);

    }
}