using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Code")]
    [BasedOnRow(typeof(CodeRow), CheckNames = true)]
    public class CodeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String AssayUnit { get; set; }
        public String DeviceName { get; set; }
        [EditLink]
        public String Code { get; set; }
        public Decimal Factor { get; set; }
        public Int32 Digit { get; set; }
        public Boolean Direction { get; set; }
    }
}