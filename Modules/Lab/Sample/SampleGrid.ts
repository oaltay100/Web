
namespace LBYS.Lab {

    @Serenity.Decorators.registerClass()
    export class SampleGrid extends Serenity.EntityGrid<SampleRow, any> {
        protected getColumnsKey() { return SampleColumns.columnsKey; }
        protected getDialogType() { return SampleDialog; }
        protected getIdProperty() { return SampleRow.idProperty; }
        protected getInsertPermission() { return SampleRow.insertPermission; }
        protected getLocalTextPrefix() { return SampleRow.localTextPrefix; }
        protected getService() { return SampleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}