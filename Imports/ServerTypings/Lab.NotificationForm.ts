namespace LBYS.Lab {
    export interface NotificationForm {
        UserId: Serenity.IntegerEditor;
        Message: Serenity.StringEditor;
    }

    export class NotificationForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Notification';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NotificationForm.init)  {
                NotificationForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(NotificationForm, [
                    'UserId', w0,
                    'Message', w1
                ]);
            }
        }
    }
}
