namespace LBYS.Lab {
    export interface ReportForm {
        LaboratoryId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Report: Serenity.StringEditor;
    }

    export class ReportForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Report';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReportForm.init)  {
                ReportForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ReportForm, [
                    'LaboratoryId', w0,
                    'Type', w0,
                    'Report', w1
                ]);
            }
        }
    }
}
