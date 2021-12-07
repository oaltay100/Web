using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Bacterium")]
    [BasedOnRow(typeof(BacteriumRow), CheckNames = true)]
    public class BacteriumForm
    {
        public Int32 DetailId { get; set; }
        public Int32 AssayId { get; set; }
        public String Name { get; set; }
        public String Result { get; set; }
        public Int32 DescriptionId { get; set; }
        public String Colony { get; set; }
        public Int32 Type { get; set; }
    }
}