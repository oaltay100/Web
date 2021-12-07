using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Description")]
    [BasedOnRow(typeof(DescriptionRow), CheckNames = true)]
    public class DescriptionForm
    {
        public Int32 Type { get; set; }
        public String Description { get; set; }
        public String Code { get; set; }
    }
}