namespace LBYS.Lab {
    export interface LevelsForm {
        CodeId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Low: Serenity.DecimalEditor;
        High: Serenity.DecimalEditor;
        Lot: Serenity.StringEditor;
        Hide: Serenity.BooleanEditor;
    }

    export class LevelsForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Levels';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LevelsForm.init)  {
                LevelsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(LevelsForm, [
                    'CodeId', w0,
                    'Name', w1,
                    'Low', w2,
                    'High', w2,
                    'Lot', w1,
                    'Hide', w3
                ]);
            }
        }
    }
}
