namespace LBYS.Lab {
    export interface DeviceForm {
        LaboratoryId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Ip: Serenity.StringEditor;
        Host: Serenity.StringEditor;
        Port: Serenity.StringEditor;
        Boudrate: Serenity.IntegerEditor;
        Databits: Serenity.IntegerEditor;
        Stopbits: Serenity.IntegerEditor;
        Parity: Serenity.IntegerEditor;
        Handshake: Serenity.IntegerEditor;
        Dtr: Serenity.BooleanEditor;
        Rts: Serenity.BooleanEditor;
    }

    export class DeviceForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Device';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DeviceForm.init)  {
                DeviceForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(DeviceForm, [
                    'LaboratoryId', w0,
                    'Type', w0,
                    'Name', w1,
                    'Ip', w1,
                    'Host', w1,
                    'Port', w1,
                    'Boudrate', w0,
                    'Databits', w0,
                    'Stopbits', w0,
                    'Parity', w0,
                    'Handshake', w0,
                    'Dtr', w2,
                    'Rts', w2
                ]);
            }
        }
    }
}
