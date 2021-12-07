namespace LBYS.Lab {
    export interface InstitutionPanelAssayForm {
        InstitutionPanelId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
    }

    export class InstitutionPanelAssayForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.InstitutionPanelAssay';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstitutionPanelAssayForm.init)  {
                InstitutionPanelAssayForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(InstitutionPanelAssayForm, [
                    'InstitutionPanelId', w0,
                    'AssayId', w0,
                    'Price', w1
                ]);
            }
        }
    }
}
