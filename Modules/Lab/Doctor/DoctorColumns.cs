using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Doctor")]
    [BasedOnRow(typeof(DoctorRow), CheckNames = true)]
    public class DoctorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String IdNumber { get; set; }
        public String RegistrationNumber { get; set; }
        public Int32 Gender { get; set; }
        public String Phone { get; set; }
        public String EMail { get; set; }
        public String Address { get; set; }
        public Int32 Task { get; set; }
        public Int32 Appellation { get; set; }
    }
}