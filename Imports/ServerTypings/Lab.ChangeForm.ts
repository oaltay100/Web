namespace LBYS.Lab {
    export interface ChangeForm {
        DetailId: Serenity.IntegerEditor;
        Result: Serenity.StringEditor;
    }

    export class ChangeForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Change';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ChangeForm.init)  {
                ChangeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ChangeForm, [
                    'DetailId', w0,
                    'Result', w1
                ]);
            }
        }
    }
}
