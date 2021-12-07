namespace LBYS.Lab {
    export interface TubeForm {
        MaterialId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Bar: Serenity.IntegerEditor;
    }

    export class TubeForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Tube';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TubeForm.init)  {
                TubeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TubeForm, [
                    'MaterialId', w0,
                    'Name', w1,
                    'Bar', w0
                ]);
            }
        }
    }
}
