using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.UserLaboratory")]
    [BasedOnRow(typeof(UserLaboratoryRow), CheckNames = true)]
    public class UserLaboratoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String UserUsername { get; set; }
        public String LaboratoryName { get; set; }
    }
}