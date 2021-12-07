namespace LBYS.Lab {
    export interface AssayForm {
        UnitId: Serenity.IntegerEditor;
        SutId: Serenity.IntegerEditor;
        ParentId: Serenity.IntegerEditor;
        Unit: Serenity.StringEditor;
        ResultType: Serenity.IntegerEditor;
        Sort: Serenity.IntegerEditor;
        Formula: Serenity.StringEditor;
        Hide: Serenity.BooleanEditor;
        Method: Serenity.StringEditor;
        MelisId: Serenity.IntegerEditor;
        Price: Serenity.DecimalEditor;
        Price2: Serenity.DecimalEditor;
        DefaultValue: Serenity.StringEditor;
    }

    export class AssayForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Assay';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AssayForm.init)  {
                AssayForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(AssayForm, [
                    'UnitId', w0,
                    'SutId', w0,
                    'ParentId', w0,
                    'Unit', w1,
                    'ResultType', w0,
                    'Sort', w0,
                    'Formula', w1,
                    'Hide', w2,
                    'Method', w1,
                    'MelisId', w0,
                    'Price', w3,
                    'Price2', w3,
                    'DefaultValue', w1
                ]);
            }
        }
    }
}
