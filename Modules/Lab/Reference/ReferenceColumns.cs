using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Reference")]
    [BasedOnRow(typeof(ReferenceRow), CheckNames = true)]
    public class ReferenceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String AssayUnit { get; set; }
        public Int32 Type { get; set; }
        public Int32 Gender { get; set; }
        public Int32 Age { get; set; }
        public Int32 Start { get; set; }
        public Int32 Finish { get; set; }
        public Decimal Low { get; set; }
        public Decimal High { get; set; }
        [EditLink]
        public String Description { get; set; }
    }
}