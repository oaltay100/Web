using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Panel")]
    [BasedOnRow(typeof(PanelRow), CheckNames = true)]
    public class PanelForm
    {
        public Int32 LaboratoryId { get; set; }
        public String Name { get; set; }
        public Decimal Price { get; set; }
    }
}