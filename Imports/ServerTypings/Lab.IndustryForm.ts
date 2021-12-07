namespace LBYS.Lab {
    export interface IndustryForm {
        Name: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }

    export class IndustryForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Industry';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IndustryForm.init)  {
                IndustryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(IndustryForm, [
                    'Name', w0,
                    'Phone', w0,
                    'Address', w0
                ]);
            }
        }
    }
}
