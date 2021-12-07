using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Code")]
    [BasedOnRow(typeof(CodeRow), CheckNames = true)]
    public class CodeForm
    {
        public Int32 AssayId { get; set; }
        public Int32 DeviceId { get; set; }
        public String Code { get; set; }
        public Decimal Factor { get; set; }
        public Int32 Digit { get; set; }
        public Boolean Direction { get; set; }
    }
}