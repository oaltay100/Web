using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.InstitutionPanel")]
    [BasedOnRow(typeof(InstitutionPanelRow), CheckNames = true)]
    public class InstitutionPanelColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String InstitutionName { get; set; }
        public Int32 ClaimType { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 PaymentType { get; set; }
    }
}