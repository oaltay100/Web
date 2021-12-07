using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.PanelAssay")]
    [BasedOnRow(typeof(PanelAssayRow), CheckNames = true)]
    public class PanelAssayForm
    {
        public Int32 PanelId { get; set; }
        public Int32 AssayId { get; set; }
    }
}