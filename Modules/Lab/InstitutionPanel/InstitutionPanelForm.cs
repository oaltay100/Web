using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.InstitutionPanel")]
    [BasedOnRow(typeof(InstitutionPanelRow), CheckNames = true)]
    public class InstitutionPanelForm
    {
        public Int32 InstitutionId { get; set; }
        public Int32 ClaimType { get; set; }
        public String Name { get; set; }
        public Int32 PaymentType { get; set; }
    }
}