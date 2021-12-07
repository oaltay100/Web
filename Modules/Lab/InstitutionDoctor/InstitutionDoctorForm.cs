using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.InstitutionDoctor")]
    [BasedOnRow(typeof(InstitutionDoctorRow), CheckNames = true)]
    public class InstitutionDoctorForm
    {
        public Int32 InstitutionId { get; set; }
        public Int32 DoctorId { get; set; }
    }
}