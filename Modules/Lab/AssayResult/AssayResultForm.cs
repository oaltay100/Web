using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.AssayResult")]
    [BasedOnRow(typeof(AssayResultRow), CheckNames = true)]
    public class AssayResultForm
    {
        public Int32 AssayId { get; set; }
    }
}