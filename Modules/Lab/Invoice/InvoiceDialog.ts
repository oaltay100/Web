
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class InvoiceDialog extends Serenity.EntityDialog<InvoiceRow, any> {
        protected getFormKey() { return InvoiceForm.formKey; }
        protected getIdProperty() { return InvoiceRow.idProperty; }
        protected getLocalTextPrefix() { return InvoiceRow.localTextPrefix; }
        protected getService() { return InvoiceService.baseUrl; }
        protected getDeletePermission() { return InvoiceRow.deletePermission; }
        protected getInsertPermission() { return InvoiceRow.insertPermission; }
        protected getUpdatePermission() { return InvoiceRow.updatePermission; }

        protected form = new InvoiceForm(this.idPrefix);

    }
}