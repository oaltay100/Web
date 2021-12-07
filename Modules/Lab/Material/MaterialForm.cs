using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Material")]
    [BasedOnRow(typeof(MaterialRow), CheckNames = true)]
    public class MaterialForm
    {
        public String Name { get; set; }
    }
}