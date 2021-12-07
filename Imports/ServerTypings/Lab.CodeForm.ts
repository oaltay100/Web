namespace LBYS.Lab {
    export interface CodeForm {
        AssayId: Serenity.IntegerEditor;
        DeviceId: Serenity.IntegerEditor;
        Code: Serenity.StringEditor;
        Factor: Serenity.DecimalEditor;
        Digit: Serenity.IntegerEditor;
        Direction: Serenity.BooleanEditor;
    }

    export class CodeForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Code';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CodeForm.init)  {
                CodeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(CodeForm, [
                    'AssayId', w0,
                    'DeviceId', w0,
                    'Code', w1,
                    'Factor', w2,
                    'Digit', w0,
                    'Direction', w3
                ]);
            }
        }
    }
}
