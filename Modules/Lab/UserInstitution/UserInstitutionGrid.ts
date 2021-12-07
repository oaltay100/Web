
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class UserInstitutionGrid extends Serenity.EntityGrid<UserInstitutionRow, any> {
        protected getColumnsKey() { return UserInstitutionColumns.columnsKey; }
        protected getDialogType() { return UserInstitutionDialog; }
        protected getIdProperty() { return UserInstitutionRow.idProperty; }
        protected getInsertPermission() { return UserInstitutionRow.insertPermission; }
        protected getLocalTextPrefix() { return UserInstitutionRow.localTextPrefix; }
        protected getService() { return UserInstitutionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}