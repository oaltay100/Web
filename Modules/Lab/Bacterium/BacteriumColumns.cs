using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Bacterium")]
    [BasedOnRow(typeof(BacteriumRow), CheckNames = true)]
    public class BacteriumColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String DetailResult { get; set; }
        public String AssayUnit { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Result { get; set; }
        public String Description { get; set; }
        public String Colony { get; set; }
        public Int32 Type { get; set; }
    }
}