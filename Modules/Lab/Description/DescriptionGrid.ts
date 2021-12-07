
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DescriptionGrid extends Serenity.EntityGrid<DescriptionRow, any> {
        protected getColumnsKey() { return DescriptionColumns.columnsKey; }
        protected getDialogType() { return DescriptionDialog; }
        protected getIdProperty() { return DescriptionRow.idProperty; }
        protected getInsertPermission() { return DescriptionRow.insertPermission; }
        protected getLocalTextPrefix() { return DescriptionRow.localTextPrefix; }
        protected getService() { return DescriptionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}