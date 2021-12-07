using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.UserLaboratory")]
    [BasedOnRow(typeof(UserLaboratoryRow), CheckNames = true)]
    public class UserLaboratoryForm
    {
        public Int32 UserId { get; set; }
        public Int32 LaboratoryId { get; set; }
    }
}