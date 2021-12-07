using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Change")]
    [BasedOnRow(typeof(ChangeRow), CheckNames = true)]
    public class ChangeForm
    {
        public Int32 DetailId { get; set; }
        public String Result { get; set; }
    }
}