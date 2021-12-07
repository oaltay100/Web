
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InstitutionDoctorGrid extends Serenity.EntityGrid<InstitutionDoctorRow, any> {
        protected getColumnsKey() { return InstitutionDoctorColumns.columnsKey; }
        protected getDialogType() { return InstitutionDoctorDialog; }
        protected getIdProperty() { return InstitutionDoctorRow.idProperty; }
        protected getInsertPermission() { return InstitutionDoctorRow.insertPermission; }
        protected getLocalTextPrefix() { return InstitutionDoctorRow.localTextPrefix; }
        protected getService() { return InstitutionDoctorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}