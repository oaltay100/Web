using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Levels")]
    [BasedOnRow(typeof(LevelsRow), CheckNames = true)]
    public class LevelsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String Code { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Low { get; set; }
        public Decimal High { get; set; }
        public String Lot { get; set; }
        public Boolean Hide { get; set; }
    }
}