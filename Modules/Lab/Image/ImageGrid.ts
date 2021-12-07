
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ImageGrid extends Serenity.EntityGrid<ImageRow, any> {
        protected getColumnsKey() { return ImageColumns.columnsKey; }
        protected getDialogType() { return ImageDialog; }
        protected getIdProperty() { return ImageRow.idProperty; }
        protected getInsertPermission() { return ImageRow.insertPermission; }
        protected getLocalTextPrefix() { return ImageRow.localTextPrefix; }
        protected getService() { return ImageService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}