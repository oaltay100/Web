
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class UserUnitGrid extends Serenity.EntityGrid<UserUnitRow, any> {
        protected getColumnsKey() { return UserUnitColumns.columnsKey; }
        protected getDialogType() { return UserUnitDialog; }
        protected getIdProperty() { return UserUnitRow.idProperty; }
        protected getInsertPermission() { return UserUnitRow.insertPermission; }
        protected getLocalTextPrefix() { return UserUnitRow.localTextPrefix; }
        protected getService() { return UserUnitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}