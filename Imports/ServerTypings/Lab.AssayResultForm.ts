namespace LBYS.Lab {
    export interface AssayResultForm {
        AssayId: Serenity.IntegerEditor;
    }

    export class AssayResultForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.AssayResult';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssayResultForm.init)  {
                AssayResultForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(AssayResultForm, [
                    'AssayId', w0
                ]);
            }
        }
    }
}
