using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Tube")]
    [BasedOnRow(typeof(TubeRow), CheckNames = true)]
    public class TubeForm
    {
        public Int32 MaterialId { get; set; }
        public String Name { get; set; }
        public Int32 Bar { get; set; }
    }
}