
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class LevelsDialog extends Serenity.EntityDialog<LevelsRow, any> {
        protected getFormKey() { return LevelsForm.formKey; }
        protected getIdProperty() { return LevelsRow.idProperty; }
        protected getLocalTextPrefix() { return LevelsRow.localTextPrefix; }
        protected getNameProperty() { return LevelsRow.nameProperty; }
        protected getService() { return LevelsService.baseUrl; }
        protected getDeletePermission() { return LevelsRow.deletePermission; }
        protected getInsertPermission() { return LevelsRow.insertPermission; }
        protected getUpdatePermission() { return LevelsRow.updatePermission; }

        protected form = new LevelsForm(this.idPrefix);

    }
}