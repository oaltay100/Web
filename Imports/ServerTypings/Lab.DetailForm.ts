namespace LBYS.Lab {
    export interface DetailForm {
        SampleId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        ParentId: Serenity.IntegerEditor;
        Result: Serenity.StringEditor;
        ResultDate: Serenity.DateEditor;
        ResultUserId: Serenity.IntegerEditor;
        DeviceId: Serenity.IntegerEditor;
        DeviceDate: Serenity.DateEditor;
        DescriptionId: Serenity.IntegerEditor;
        Picture: Serenity.StringEditor;
        Unit: Serenity.StringEditor;
        NLow: Serenity.DecimalEditor;
        NHigh: Serenity.DecimalEditor;
        PLow: Serenity.DecimalEditor;
        PHigh: Serenity.DecimalEditor;
        Special: Serenity.StringEditor;
        Importance: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        InstitutionId: Serenity.IntegerEditor;
    }

    export class DetailForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Detail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DetailForm.init)  {
                DetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(DetailForm, [
                    'SampleId', w0,
                    'AssayId', w0,
                    'ParentId', w0,
                    'Result', w1,
                    'ResultDate', w2,
                    'ResultUserId', w0,
                    'DeviceId', w0,
                    'DeviceDate', w2,
                    'DescriptionId', w0,
                    'Picture', w1,
                    'Unit', w1,
                    'NLow', w3,
                    'NHigh', w3,
                    'PLow', w3,
                    'PHigh', w3,
                    'Special', w1,
                    'Importance', w0,
                    'Price', w3,
                    'InstitutionId', w0
                ]);
            }
        }
    }
}
