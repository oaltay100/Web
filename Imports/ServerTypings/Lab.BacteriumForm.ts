namespace LBYS.Lab {
    export interface BacteriumForm {
        DetailId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Result: Serenity.StringEditor;
        DescriptionId: Serenity.IntegerEditor;
        Colony: Serenity.StringEditor;
        Type: Serenity.IntegerEditor;
    }

    export class BacteriumForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Bacterium';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BacteriumForm.init)  {
                BacteriumForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(BacteriumForm, [
                    'DetailId', w0,
                    'AssayId', w0,
                    'Name', w1,
                    'Result', w1,
                    'DescriptionId', w0,
                    'Colony', w1,
                    'Type', w0
                ]);
            }
        }
    }
}
