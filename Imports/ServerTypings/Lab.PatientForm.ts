namespace LBYS.Lab {
    export interface PatientForm {
        Name: Serenity.StringEditor;
        IdNumber: Serenity.StringEditor;
        FatherName: Serenity.StringEditor;
        MotherName: Serenity.StringEditor;
        Birthdate: Serenity.DateEditor;
        Place: Serenity.StringEditor;
        BloodGroup: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
    }

    export class PatientForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Patient';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PatientForm.init)  {
                PatientForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(PatientForm, [
                    'Name', w0,
                    'IdNumber', w0,
                    'FatherName', w0,
                    'MotherName', w0,
                    'Birthdate', w1,
                    'Place', w0,
                    'BloodGroup', w2,
                    'Phone', w0,
                    'EMail', w0,
                    'Address', w0
                ]);
            }
        }
    }
}
