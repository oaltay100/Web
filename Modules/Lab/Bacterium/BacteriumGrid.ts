
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class BacteriumGrid extends Serenity.EntityGrid<BacteriumRow, any> {
        protected getColumnsKey() { return BacteriumColumns.columnsKey; }
        protected getDialogType() { return BacteriumDialog; }
        protected getIdProperty() { return BacteriumRow.idProperty; }
        protected getInsertPermission() { return BacteriumRow.insertPermission; }
        protected getLocalTextPrefix() { return BacteriumRow.localTextPrefix; }
        protected getService() { return BacteriumService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}