namespace LBYS.Lab {
    export interface AcceptForm {
        SampleId: Serenity.IntegerEditor;
        Accept: Serenity.IntegerEditor;
        AcceptDate: Serenity.DateEditor;
        AcceptUserId: Serenity.IntegerEditor;
    }

    export class AcceptForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Accept';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AcceptForm.init)  {
                AcceptForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(AcceptForm, [
                    'SampleId', w0,
                    'Accept', w0,
                    'AcceptDate', w1,
                    'AcceptUserId', w0
                ]);
            }
        }
    }
}
