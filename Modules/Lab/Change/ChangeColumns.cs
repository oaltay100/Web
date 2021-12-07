using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Change")]
    [BasedOnRow(typeof(ChangeRow), CheckNames = true)]
    public class ChangeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String DetailResult { get; set; }
        [EditLink]
        public String Result { get; set; }
    }
}