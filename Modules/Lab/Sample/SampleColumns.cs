using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Sample")]
    [BasedOnRow(typeof(SampleRow), CheckNames = true)]
    public class SampleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String ClaimDescription { get; set; }
        public String UnitName { get; set; }
        public Int32 Barcode { get; set; }
        [EditLink]
        public String Rack { get; set; }
    }
}