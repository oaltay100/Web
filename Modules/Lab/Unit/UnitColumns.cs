using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Unit")]
    [BasedOnRow(typeof(UnitRow), CheckNames = true)]
    public class UnitColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        public String TubeName { get; set; }
        public Int32 Type { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Int32 Sort { get; set; }
        public Int32 TimetoResults { get; set; }
        public Boolean IsAssayBarcode { get; set; }
    }
}