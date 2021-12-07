
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ReportGrid extends Serenity.EntityGrid<ReportRow, any> {
        protected getColumnsKey() { return ReportColumns.columnsKey; }
        protected getDialogType() { return ReportDialog; }
        protected getIdProperty() { return ReportRow.idProperty; }
        protected getInsertPermission() { return ReportRow.insertPermission; }
        protected getLocalTextPrefix() { return ReportRow.localTextPrefix; }
        protected getService() { return ReportService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}