using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Tube")]
    [BasedOnRow(typeof(TubeRow), CheckNames = true)]
    public class TubeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String MaterialName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 Bar { get; set; }
    }
}