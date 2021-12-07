
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class UnitGrid extends Serenity.EntityGrid<UnitRow, any> {
        protected getColumnsKey() { return UnitColumns.columnsKey; }
        protected getDialogType() { return UnitDialog; }
        protected getIdProperty() { return UnitRow.idProperty; }
        protected getInsertPermission() { return UnitRow.insertPermission; }
        protected getLocalTextPrefix() { return UnitRow.localTextPrefix; }
        protected getService() { return UnitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}