using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Sut")]
    [BasedOnRow(typeof(SutRow), CheckNames = true)]
    public class SutForm
    {
        public String Name { get; set; }
        public String Code { get; set; }
        public String Loinc { get; set; }
        public Decimal Point { get; set; }
    }
}