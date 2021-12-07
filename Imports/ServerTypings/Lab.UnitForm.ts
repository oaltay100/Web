namespace LBYS.Lab {
    export interface UnitForm {
        LaboratoryId: Serenity.IntegerEditor;
        TubeId: Serenity.IntegerEditor;
        Type: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Sort: Serenity.IntegerEditor;
        TimetoResults: Serenity.IntegerEditor;
        IsAssayBarcode: Serenity.BooleanEditor;
    }

    export class UnitForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Unit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!UnitForm.init)  {
                UnitForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(UnitForm, [
                    'LaboratoryId', w0,
                    'TubeId', w0,
                    'Type', w0,
                    'Name', w1,
                    'Sort', w0,
                    'TimetoResults', w0,
                    'IsAssayBarcode', w2
                ]);
            }
        }
    }
}
