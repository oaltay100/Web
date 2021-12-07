using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Detail")]
    [BasedOnRow(typeof(DetailRow), CheckNames = true)]
    public class DetailForm
    {
        public Int32 SampleId { get; set; }
        public Int32 AssayId { get; set; }
        public Int32 ParentId { get; set; }
        public String Result { get; set; }
        public DateTime ResultDate { get; set; }
        public Int32 ResultUserId { get; set; }
        public Int32 DeviceId { get; set; }
        public DateTime DeviceDate { get; set; }
        public Int32 DescriptionId { get; set; }
        public String Picture { get; set; }
        public String Unit { get; set; }
        public Decimal NLow { get; set; }
        public Decimal NHigh { get; set; }
        public Decimal PLow { get; set; }
        public Decimal PHigh { get; set; }
        public String Special { get; set; }
        public Int32 Importance { get; set; }
        public Decimal Price { get; set; }
        public Int32 InstitutionId { get; set; }
    }
}