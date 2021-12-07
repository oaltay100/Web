using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Report")]
    [BasedOnRow(typeof(ReportRow), CheckNames = true)]
    public class ReportColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        public Int32 Type { get; set; }
        [EditLink]
        public String Report { get; set; }
    }
}