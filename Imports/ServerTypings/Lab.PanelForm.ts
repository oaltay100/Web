namespace LBYS.Lab {
    export interface PanelForm {
        LaboratoryId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
    }

    export class PanelForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Panel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PanelForm.init)  {
                PanelForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PanelForm, [
                    'LaboratoryId', w0,
                    'Name', w1,
                    'Price', w2
                ]);
            }
        }
    }
}
