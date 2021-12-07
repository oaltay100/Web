
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ReferenceDialog extends Serenity.EntityDialog<ReferenceRow, any> {
        protected getFormKey() { return ReferenceForm.formKey; }
        protected getIdProperty() { return ReferenceRow.idProperty; }
        protected getLocalTextPrefix() { return ReferenceRow.localTextPrefix; }
        protected getNameProperty() { return ReferenceRow.nameProperty; }
        protected getService() { return ReferenceService.baseUrl; }
        protected getDeletePermission() { return ReferenceRow.deletePermission; }
        protected getInsertPermission() { return ReferenceRow.insertPermission; }
        protected getUpdatePermission() { return ReferenceRow.updatePermission; }

        protected form = new ReferenceForm(this.idPrefix);

    }
}