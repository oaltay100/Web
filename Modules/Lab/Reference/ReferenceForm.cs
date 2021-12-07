using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Reference")]
    [BasedOnRow(typeof(ReferenceRow), CheckNames = true)]
    public class ReferenceForm
    {
        public Int32 AssayId { get; set; }
        public Int32 Type { get; set; }
        public Int32 Gender { get; set; }
        public Int32 Age { get; set; }
        public Int32 Start { get; set; }
        public Int32 Finish { get; set; }
        public Decimal Low { get; set; }
        public Decimal High { get; set; }
        public String Description { get; set; }
    }
}