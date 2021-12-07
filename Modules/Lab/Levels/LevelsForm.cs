using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Levels")]
    [BasedOnRow(typeof(LevelsRow), CheckNames = true)]
    public class LevelsForm
    {
        public Int32 CodeId { get; set; }
        public String Name { get; set; }
        public Decimal Low { get; set; }
        public Decimal High { get; set; }
        public String Lot { get; set; }
        public Boolean Hide { get; set; }
    }
}