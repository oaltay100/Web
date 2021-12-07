namespace LBYS.Lab {
    export interface InstitutionDoctorForm {
        InstitutionId: Serenity.IntegerEditor;
        DoctorId: Serenity.IntegerEditor;
    }

    export class InstitutionDoctorForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.InstitutionDoctor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InstitutionDoctorForm.init)  {
                InstitutionDoctorForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(InstitutionDoctorForm, [
                    'InstitutionId', w0,
                    'DoctorId', w0
                ]);
            }
        }
    }
}
