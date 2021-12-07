namespace LBYS.Lab {
    export interface LaboratoryForm {
        Name: Serenity.StringEditor;
        Logo: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Mernis: Serenity.StringEditor;
        Institution: Serenity.StringEditor;
        SrvMelis: Serenity.BooleanEditor;
        SrvENabiz: Serenity.BooleanEditor;
        SrvCovid: Serenity.BooleanEditor;
        IsPaymentMandatory: Serenity.BooleanEditor;
        IsAcceptrequired: Serenity.BooleanEditor;
        IsDoNotReprint: Serenity.BooleanEditor;
    }

    export class LaboratoryForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Laboratory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!LaboratoryForm.init)  {
                LaboratoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(LaboratoryForm, [
                    'Name', w0,
                    'Logo', w0,
                    'Phone', w0,
                    'Fax', w0,
                    'EMail', w0,
                    'Address', w0,
                    'Mernis', w0,
                    'Institution', w0,
                    'SrvMelis', w1,
                    'SrvENabiz', w1,
                    'SrvCovid', w1,
                    'IsPaymentMandatory', w1,
                    'IsAcceptrequired', w1,
                    'IsDoNotReprint', w1
                ]);
            }
        }
    }
}
