
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class ReportDialog extends Serenity.EntityDialog<ReportRow, any> {
        protected getFormKey() { return ReportForm.formKey; }
        protected getIdProperty() { return ReportRow.idProperty; }
        protected getLocalTextPrefix() { return ReportRow.localTextPrefix; }
        protected getNameProperty() { return ReportRow.nameProperty; }
        protected getService() { return ReportService.baseUrl; }
        protected getDeletePermission() { return ReportRow.deletePermission; }
        protected getInsertPermission() { return ReportRow.insertPermission; }
        protected getUpdatePermission() { return ReportRow.updatePermission; }

        protected form = new ReportForm(this.idPrefix);

    }
}