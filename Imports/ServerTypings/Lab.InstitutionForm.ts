namespace LBYS.Lab {
    export interface InstitutionForm {
        LaboratoryId: Serenity.IntegerEditor;
        IndustryId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        PaymentType: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        PriceType: Serenity.IntegerEditor;
        IsExternal: Serenity.BooleanEditor;
        Symbol: Serenity.StringEditor;
    }

    export class InstitutionForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Institution';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstitutionForm.init)  {
                InstitutionForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(InstitutionForm, [
                    'LaboratoryId', w0,
                    'IndustryId', w0,
                    'Name', w1,
                    'Phone', w1,
                    'Address', w1,
                    'PaymentType', w0,
                    'Price', w2,
                    'PriceType', w0,
                    'IsExternal', w3,
                    'Symbol', w1
                ]);
            }
        }
    }
}
