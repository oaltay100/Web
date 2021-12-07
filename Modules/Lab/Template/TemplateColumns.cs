using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Template")]
    [BasedOnRow(typeof(TemplateRow), CheckNames = true)]
    public class TemplateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        public Int32 Type { get; set; }
        [EditLink]
        public String BgColor { get; set; }
        public String Color { get; set; }
    }
}