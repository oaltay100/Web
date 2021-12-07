namespace LBYS.Lab {
    export interface LekForm {
        UnitId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Lek: Serenity.IntegerEditor;
        Warning: Serenity.IntegerEditor;
        Error: Serenity.IntegerEditor;
    }

    export class LekForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Lek';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LekForm.init)  {
                LekForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(LekForm, [
                    'UnitId', w0,
                    'Type', w0,
                    'Lek', w0,
                    'Warning', w0,
                    'Error', w0
                ]);
            }
        }
    }
}
