
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class LevelsGrid extends Serenity.EntityGrid<LevelsRow, any> {
        protected getColumnsKey() { return LevelsColumns.columnsKey; }
        protected getDialogType() { return LevelsDialog; }
        protected getIdProperty() { return LevelsRow.idProperty; }
        protected getInsertPermission() { return LevelsRow.insertPermission; }
        protected getLocalTextPrefix() { return LevelsRow.localTextPrefix; }
        protected getService() { return LevelsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}