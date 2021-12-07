using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Lek")]
    [BasedOnRow(typeof(LekRow), CheckNames = true)]
    public class LekForm
    {
        public Int32 UnitId { get; set; }
        public Int32 Type { get; set; }
        public Int32 Lek { get; set; }
        public Int32 Warning { get; set; }
        public Int32 Error { get; set; }
    }
}