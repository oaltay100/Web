using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.InstitutionPanelAssay")]
    [BasedOnRow(typeof(InstitutionPanelAssayRow), CheckNames = true)]
    public class InstitutionPanelAssayForm
    {
        public Int32 InstitutionPanelId { get; set; }
        public Int32 AssayId { get; set; }
        public Decimal Price { get; set; }
    }
}