using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Image")]
    [BasedOnRow(typeof(ImageRow), CheckNames = true)]
    public class ImageForm
    {
        public Int32 DetailId { get; set; }
        public String Path { get; set; }
        public String StudyUid { get; set; }
        public String SeriUid { get; set; }
        public String ImageUid { get; set; }
    }
}