using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.PanelAssay")]
    [BasedOnRow(typeof(PanelAssayRow), CheckNames = true)]
    public class PanelAssayColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String PanelName { get; set; }
        public String AssayUnit { get; set; }
    }
}