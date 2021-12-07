namespace LBYS.Lab {
    export interface DoctorForm {
        LaboratoryId: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        IdNumber: Serenity.StringEditor;
        RegistrationNumber: Serenity.StringEditor;
        Gender: Serenity.IntegerEditor;
        Phone: Serenity.StringEditor;
        EMail: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Task: Serenity.IntegerEditor;
        Appellation: Serenity.IntegerEditor;
    }

    export class DoctorForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Doctor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DoctorForm.init)  {
                DoctorForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(DoctorForm, [
                    'LaboratoryId', w0,
                    'Name', w1,
                    'IdNumber', w1,
                    'RegistrationNumber', w1,
                    'Gender', w0,
                    'Phone', w1,
                    'EMail', w1,
                    'Address', w1,
                    'Task', w0,
                    'Appellation', w0
                ]);
            }
        }
    }
}
