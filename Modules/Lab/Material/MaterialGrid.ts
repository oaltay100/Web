
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class MaterialGrid extends Serenity.EntityGrid<MaterialRow, any> {
        protected getColumnsKey() { return MaterialColumns.columnsKey; }
        protected getDialogType() { return MaterialDialog; }
        protected getIdProperty() { return MaterialRow.idProperty; }
        protected getInsertPermission() { return MaterialRow.insertPermission; }
        protected getLocalTextPrefix() { return MaterialRow.localTextPrefix; }
        protected getService() { return MaterialService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}