namespace LBYS.Lab {
    export interface ControlForm {
        LevelsId: Serenity.IntegerEditor;
        RecordDate: Serenity.DateEditor;
        Result: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class ControlForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Control';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ControlForm.init)  {
                ControlForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(ControlForm, [
                    'LevelsId', w0,
                    'RecordDate', w1,
                    'Result', w2,
                    'Description', w2
                ]);
            }
        }
    }
}
