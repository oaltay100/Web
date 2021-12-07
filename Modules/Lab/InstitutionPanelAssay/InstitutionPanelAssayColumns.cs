using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.InstitutionPanelAssay")]
    [BasedOnRow(typeof(InstitutionPanelAssayRow), CheckNames = true)]
    public class InstitutionPanelAssayColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String InstitutionPanelName { get; set; }
        public String AssayUnit { get; set; }
        public Decimal Price { get; set; }
    }
}