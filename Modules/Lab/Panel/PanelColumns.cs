using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Panel")]
    [BasedOnRow(typeof(PanelRow), CheckNames = true)]
    public class PanelColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Price { get; set; }
    }
}