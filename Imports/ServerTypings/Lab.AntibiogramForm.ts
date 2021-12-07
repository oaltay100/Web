namespace LBYS.Lab {
    export interface AntibiogramForm {
        BacteriumId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        Result: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Hide: Serenity.BooleanEditor;
    }

    export class AntibiogramForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Antibiogram';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AntibiogramForm.init)  {
                AntibiogramForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(AntibiogramForm, [
                    'BacteriumId', w0,
                    'AssayId', w0,
                    'Result', w1,
                    'Description', w1,
                    'Hide', w2
                ]);
            }
        }
    }
}
