namespace LBYS.Lab {
    export interface InstitutionPanelForm {
        InstitutionId: Serenity.IntegerEditor;
        ClaimType: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        PaymentType: Serenity.IntegerEditor;
    }

    export class InstitutionPanelForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.InstitutionPanel';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstitutionPanelForm.init)  {
                InstitutionPanelForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(InstitutionPanelForm, [
                    'InstitutionId', w0,
                    'ClaimType', w0,
                    'Name', w1,
                    'PaymentType', w0
                ]);
            }
        }
    }
}
