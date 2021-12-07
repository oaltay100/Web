namespace LBYS.Lab {
    export interface InvoiceForm {
        LaboratoryId: Serenity.IntegerEditor;
        InstitutionId: Serenity.IntegerEditor;
        Year: Serenity.IntegerEditor;
        Number: Serenity.IntegerEditor;
        Date: Serenity.DateEditor;
        Prite: Serenity.DecimalEditor;
        Counts: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
    }

    export class InvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Invoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InvoiceForm.init)  {
                InvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(InvoiceForm, [
                    'LaboratoryId', w0,
                    'InstitutionId', w0,
                    'Year', w0,
                    'Number', w0,
                    'Date', w1,
                    'Prite', w2,
                    'Counts', w0,
                    'Status', w0
                ]);
            }
        }
    }
}
