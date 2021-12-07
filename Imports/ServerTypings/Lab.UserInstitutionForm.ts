namespace LBYS.Lab {
    export interface UserInstitutionForm {
        UserId: Serenity.IntegerEditor;
        InstitutionId: Serenity.IntegerEditor;
    }

    export class UserInstitutionForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.UserInstitution';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserInstitutionForm.init)  {
                UserInstitutionForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(UserInstitutionForm, [
                    'UserId', w0,
                    'InstitutionId', w0
                ]);
            }
        }
    }
}
