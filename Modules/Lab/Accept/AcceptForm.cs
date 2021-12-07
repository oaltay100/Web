using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Accept")]
    [BasedOnRow(typeof(AcceptRow), CheckNames = true)]
    public class AcceptForm
    {
        public Int32 SampleId { get; set; }
        public Int32 Accept { get; set; }
        public DateTime AcceptDate { get; set; }
        public Int32 AcceptUserId { get; set; }
    }
}