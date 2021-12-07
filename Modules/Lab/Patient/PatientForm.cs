using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Patient")]
    [BasedOnRow(typeof(PatientRow), CheckNames = true)]
    public class PatientForm
    {
        public String Name { get; set; }
        public String IdNumber { get; set; }
        public String FatherName { get; set; }
        public String MotherName { get; set; }
        public DateTime Birthdate { get; set; }
        public String Place { get; set; }
        public Int32 BloodGroup { get; set; }
        public String Phone { get; set; }
        public String EMail { get; set; }
        public String Address { get; set; }
    }
}