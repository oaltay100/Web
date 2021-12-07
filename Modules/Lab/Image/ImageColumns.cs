using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Image")]
    [BasedOnRow(typeof(ImageRow), CheckNames = true)]
    public class ImageColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String DetailResult { get; set; }
        [EditLink]
        public String Path { get; set; }
        public String StudyUid { get; set; }
        public String SeriUid { get; set; }
        public String ImageUid { get; set; }
    }
}