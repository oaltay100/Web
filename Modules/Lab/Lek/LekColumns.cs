using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Lek")]
    [BasedOnRow(typeof(LekRow), CheckNames = true)]
    public class LekColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UnitName { get; set; }
        public Int32 Type { get; set; }
        public Int32 Lek { get; set; }
        public Int32 Warning { get; set; }
        public Int32 Error { get; set; }
    }
}