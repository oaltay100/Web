
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class AntibiogramGrid extends Serenity.EntityGrid<AntibiogramRow, any> {
        protected getColumnsKey() { return AntibiogramColumns.columnsKey; }
        protected getDialogType() { return AntibiogramDialog; }
        protected getIdProperty() { return AntibiogramRow.idProperty; }
        protected getInsertPermission() { return AntibiogramRow.insertPermission; }
        protected getLocalTextPrefix() { return AntibiogramRow.localTextPrefix; }
        protected getService() { return AntibiogramService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}