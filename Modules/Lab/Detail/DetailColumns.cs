using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Detail")]
    [BasedOnRow(typeof(DetailRow), CheckNames = true)]
    public class DetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String SampleRack { get; set; }
        public String AssayUnit { get; set; }
        public String ParentResult { get; set; }
        [EditLink]
        public String Result { get; set; }
        public DateTime ResultDate { get; set; }
        public Int32 ResultUserId { get; set; }
        public Int32 DeviceId { get; set; }
        public DateTime DeviceDate { get; set; }
        public String Description { get; set; }
        public String Picture { get; set; }
        public String Unit { get; set; }
        public Decimal NLow { get; set; }
        public Decimal NHigh { get; set; }
        public Decimal PLow { get; set; }
        public Decimal PHigh { get; set; }
        public String Special { get; set; }
        public Int32 Importance { get; set; }
        public Decimal Price { get; set; }
        public String InstitutionName { get; set; }
    }
}