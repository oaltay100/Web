using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Antibiogram")]
    [BasedOnRow(typeof(AntibiogramRow), CheckNames = true)]
    public class AntibiogramColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UseIdrId { get; set; }
        public String BacteriumName { get; set; }
        public String AssayUnit { get; set; }
        [EditLink]
        public String Result { get; set; }
        public String Description { get; set; }
        public Boolean Hide { get; set; }
    }
}