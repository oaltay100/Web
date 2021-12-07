
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class BacteriumDialog extends Serenity.EntityDialog<BacteriumRow, any> {
        protected getFormKey() { return BacteriumForm.formKey; }
        protected getIdProperty() { return BacteriumRow.idProperty; }
        protected getLocalTextPrefix() { return BacteriumRow.localTextPrefix; }
        protected getNameProperty() { return BacteriumRow.nameProperty; }
        protected getService() { return BacteriumService.baseUrl; }
        protected getDeletePermission() { return BacteriumRow.deletePermission; }
        protected getInsertPermission() { return BacteriumRow.insertPermission; }
        protected getUpdatePermission() { return BacteriumRow.updatePermission; }

        protected form = new BacteriumForm(this.idPrefix);

    }
}