
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class UserLaboratoryGrid extends Serenity.EntityGrid<UserLaboratoryRow, any> {
        protected getColumnsKey() { return UserLaboratoryColumns.columnsKey; }
        protected getDialogType() { return UserLaboratoryDialog; }
        protected getIdProperty() { return UserLaboratoryRow.idProperty; }
        protected getInsertPermission() { return UserLaboratoryRow.insertPermission; }
        protected getLocalTextPrefix() { return UserLaboratoryRow.localTextPrefix; }
        protected getService() { return UserLaboratoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}