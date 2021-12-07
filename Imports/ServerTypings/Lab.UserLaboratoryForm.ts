namespace LBYS.Lab {
    export interface UserLaboratoryForm {
        UserId: Serenity.IntegerEditor;
        LaboratoryId: Serenity.IntegerEditor;
    }

    export class UserLaboratoryForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.UserLaboratory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserLaboratoryForm.init)  {
                UserLaboratoryForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(UserLaboratoryForm, [
                    'UserId', w0,
                    'LaboratoryId', w0
                ]);
            }
        }
    }
}
