using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Industry")]
    [BasedOnRow(typeof(IndustryRow), CheckNames = true)]
    public class IndustryForm
    {
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Address { get; set; }
    }
}