using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Report")]
    [BasedOnRow(typeof(ReportRow), CheckNames = true)]
    public class ReportForm
    {
        public Int32 LaboratoryId { get; set; }
        public Int32 Type { get; set; }
        public String Report { get; set; }
    }
}