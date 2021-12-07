namespace LBYS.Lab {
    export interface ImageForm {
        DetailId: Serenity.IntegerEditor;
        Path: Serenity.StringEditor;
        StudyUid: Serenity.StringEditor;
        SeriUid: Serenity.StringEditor;
        ImageUid: Serenity.StringEditor;
    }

    export class ImageForm extends Serenity.PrefixedContext {
        static formKey = 'Lab.Image';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImageForm.init)  {
                ImageForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(ImageForm, [
                    'DetailId', w0,
                    'Path', w1,
                    'StudyUid', w1,
                    'SeriUid', w1,
                    'ImageUid', w1
                ]);
            }
        }
    }
}
