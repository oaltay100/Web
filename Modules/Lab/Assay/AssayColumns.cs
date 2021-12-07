using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Assay")]
    [BasedOnRow(typeof(AssayRow), CheckNames = true)]
    public class AssayColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UnitName { get; set; }
        public String SutName { get; set; }
        public String ParentUnit { get; set; }
        [EditLink]
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