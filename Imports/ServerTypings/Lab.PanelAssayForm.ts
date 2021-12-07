namespace LBYS.Lab {
    export interface PanelAssayForm {
        PanelId: Serenity.IntegerEditor;
        AssayId: Serenity.IntegerEditor;
    }

    export class PanelAssayForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.PanelAssay';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PanelAssayForm.init)  {
                PanelAssayForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(PanelAssayForm, [
                    'PanelId', w0,
                    'AssayId', w0
                ]);
            }
        }
    }
}
