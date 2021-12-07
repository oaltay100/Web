namespace LBYS.Lab {
    export interface UserUnitForm {
        UserId: Serenity.IntegerEditor;
        UnitId: Serenity.IntegerEditor;
    }

    export class UserUnitForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.UserUnit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UserUnitForm.init)  {
                UserUnitForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(UserUnitForm, [
                    'UserId', w0,
                    'UnitId', w0
                ]);
            }
        }
    }
}
