namespace LBYS.Lab {
    export interface SampleForm {
        ClaimId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
        Barcode: Serenity.IntegerEditor;
        Rack: Serenity.StringEditor;
    }

    export class SampleForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Sample';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SampleForm.init)  {
                SampleForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(SampleForm, [
                    'ClaimId', w0,
                    'UnitId', w0,
                    'Barcode', w0,
                    'Rack', w1
                ]);
            }
        }
    }
}
