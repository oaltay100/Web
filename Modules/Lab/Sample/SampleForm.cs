using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Sample")]
    [BasedOnRow(typeof(SampleRow), CheckNames = true)]
    public class SampleForm
    {
        public Int32 ClaimId { get; set; }
        public Int32 UnitId { get; set; }
        public Int32 Barcode { get; set; }
        public String Rack { get; set; }
    }
}