namespace LBYS.Lab {
    export interface DescriptionForm {
        Type: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
        Code: Serenity.StringEditor;
    }

    export class DescriptionForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Description';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DescriptionForm.init)  {
                DescriptionForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(DescriptionForm, [
                    'Type', w0,
                    'Description', w1,
                    'Code', w1
                ]);
            }
        }
    }
}
