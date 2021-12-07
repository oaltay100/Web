using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Control")]
    [BasedOnRow(typeof(ControlRow), CheckNames = true)]
    public class ControlColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LevelsName { get; set; }
        public DateTime RecordDate { get; set; }
        [EditLink]
        public String Result { get; set; }
        public String Description { get; set; }
    }
}