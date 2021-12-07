namespace LBYS.Lab {
    export interface ReferenceForm {
        AssayId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Gender: Serenity.IntegerEditor;
        Age: Serenity.IntegerEditor;
        Start: Serenity.IntegerEditor;
        Finish: Serenity.IntegerEditor;
        Low: Serenity.DecimalEditor;
        High: Serenity.DecimalEditor;
        Description: Serenity.StringEditor;
    }

    export class ReferenceForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Reference';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReferenceForm.init)  {
                ReferenceForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;

                Q.initFormType(ReferenceForm, [
                    'AssayId', w0,
                    'Type', w0,
                    'Gender', w0,
                    'Age', w0,
                    'Start', w0,
                    'Finish', w0,
                    'Low', w1,
                    'High', w1,
                    'Description', w2
                ]);
            }
        }
    }
}
