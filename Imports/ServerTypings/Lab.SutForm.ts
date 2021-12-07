namespace LBYS.Lab {
    export interface SutForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        Loinc: Serenity.StringEditor;
        Point: Serenity.DecimalEditor;
    }

    export class SutForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Sut';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SutForm.init)  {
                SutForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(SutForm, [
                    'Name', w0,
                    'Code', w0,
                    'Loinc', w0,
                    'Point', w1
                ]);
            }
        }
    }
}
