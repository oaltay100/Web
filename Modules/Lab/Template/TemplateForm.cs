using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Template")]
    [BasedOnRow(typeof(TemplateRow), CheckNames = true)]
    public class TemplateForm
    {
        public Int32 LaboratoryId { get; set; }
        public Int32 Type { get; set; }
        public String BgColor { get; set; }
        public String Color { get; set; }
    }
}