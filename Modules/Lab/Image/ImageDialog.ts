
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ImageDialog extends Serenity.EntityDialog<ImageRow, any> {
        protected getFormKey() { return ImageForm.formKey; }
        protected getIdProperty() { return ImageRow.idProperty; }
        protected getLocalTextPrefix() { return ImageRow.localTextPrefix; }
        protected getNameProperty() { return ImageRow.nameProperty; }
        protected getService() { return ImageService.baseUrl; }
        protected getDeletePermission() { return ImageRow.deletePermission; }
        protected getInsertPermission() { return ImageRow.insertPermission; }
        protected getUpdatePermission() { return ImageRow.updatePermission; }

        protected form = new ImageForm(this.idPrefix);

    }
}