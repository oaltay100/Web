namespace LBYS.Lab {
    export interface TemplateForm {
        LaboratoryId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        BgColor: Serenity.StringEditor;
        Color: Serenity.StringEditor;
    }

    export class TemplateForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Template';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TemplateForm.init)  {
                TemplateForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TemplateForm, [
                    'LaboratoryId', w0,
                    'Type', w0,
                    'BgColor', w1,
                    'Color', w1
                ]);
            }
        }
    }
}
