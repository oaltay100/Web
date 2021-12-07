
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class DoctorGrid extends Serenity.EntityGrid<DoctorRow, any> {
        protected getColumnsKey() { return DoctorColumns.columnsKey; }
        protected getDialogType() { return DoctorDialog; }
        protected getIdProperty() { return DoctorRow.idProperty; }
        protected getInsertPermission() { return DoctorRow.insertPermission; }
        protected getLocalTextPrefix() { return DoctorRow.localTextPrefix; }
        protected getService() { return DoctorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}