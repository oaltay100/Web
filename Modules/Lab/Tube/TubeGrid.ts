
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class TubeGrid extends Serenity.EntityGrid<TubeRow, any> {
        protected getColumnsKey() { return TubeColumns.columnsKey; }
        protected getDialogType() { return TubeDialog; }
        protected getIdProperty() { return TubeRow.idProperty; }
        protected getInsertPermission() { return TubeRow.insertPermission; }
        protected getLocalTextPrefix() { return TubeRow.localTextPrefix; }
        protected getService() { return TubeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}