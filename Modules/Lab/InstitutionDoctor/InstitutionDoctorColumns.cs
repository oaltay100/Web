using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.InstitutionDoctor")]
    [BasedOnRow(typeof(InstitutionDoctorRow), CheckNames = true)]
    public class InstitutionDoctorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String InstitutionName { get; set; }
        public String DoctorName { get; set; }
    }
}