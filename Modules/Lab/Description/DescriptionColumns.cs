using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Description")]
    [BasedOnRow(typeof(DescriptionRow), CheckNames = true)]
    public class DescriptionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 Type { get; set; }
        [EditLink]
        public String Description { get; set; }
        public String Code { get; set; }
    }
}