namespace LBYS.Lab {
    export interface MaterialForm {
        Name: Serenity.StringEditor;
    }

    export class MaterialForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Material';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MaterialForm.init)  {
                MaterialForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MaterialForm, [
                    'Name', w0
                ]);
            }
        }
    }
}
