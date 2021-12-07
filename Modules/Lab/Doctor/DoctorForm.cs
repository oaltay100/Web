using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Doctor")]
    [BasedOnRow(typeof(DoctorRow), CheckNames = true)]
    public class DoctorForm
    {
        public Int32 LaboratoryId { get; set; }
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