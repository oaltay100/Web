
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class PatientGrid extends Serenity.EntityGrid<PatientRow, any> {
        protected getColumnsKey() { return PatientColumns.columnsKey; }
        protected getDialogType() { return PatientDialog; }
        protected getIdProperty() { return PatientRow.idProperty; }
        protected getInsertPermission() { return PatientRow.insertPermission; }
        protected getLocalTextPrefix() { return PatientRow.localTextPrefix; }
        protected getService() { return PatientService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}