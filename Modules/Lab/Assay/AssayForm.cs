using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Assay")]
    [BasedOnRow(typeof(AssayRow), CheckNames = true)]
    public class AssayForm
    {
        public Int32 UnitId { get; set; }
        public Int32 SutId { get; set; }
        public Int32 ParentId { get; set; }
        public String Unit { get; set; }
        public Int32 ResultType { get; set; }
        public Int32 Sort { get; set; }
        public String Formula { get; set; }
        public Boolean Hide { get; set; }
        public String Method { get; set; }
        public Int32 MelisId { get; set; }
        public Decimal Price { get; set; }
        public Decimal Price2 { get; set; }
        public String DefaultValue { get; set; }
    }
}