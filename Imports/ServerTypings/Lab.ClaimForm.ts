namespace LBYS.Lab {
    export interface ClaimForm {
        LaboratoryId: Serenity.IntegerEditor;
        RecordDate: Serenity.DateEditor;
        InstitutionId: Serenity.IntegerEditor;
        PatientId: Serenity.IntegerEditor;
        ClaimType: Serenity.IntegerEditor;
        Priorty: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        InvoiceId: Serenity.IntegerEditor;
        PaymentType: Serenity.IntegerEditor;
        PaymentStatus: Serenity.BooleanEditor;
        Fee: Serenity.DecimalEditor;
        Price: Serenity.DecimalEditor;
    }

    export class ClaimForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Claim';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ClaimForm.init)  {
                ClaimForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(ClaimForm, [
                    'LaboratoryId', w0,
                    'RecordDate', w1,
                    'InstitutionId', w0,
                    'PatientId', w0,
                    'ClaimType', w0,
                    'Priorty', w0,
                    'Description', w2,
                    'InvoiceId', w0,
                    'PaymentType', w0,
                    'PaymentStatus', w3,
                    'Fee', w4,
                    'Price', w4
                ]);
            }
        }
    }
}
