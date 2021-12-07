using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.UserInstitution")]
    [BasedOnRow(typeof(UserInstitutionRow), CheckNames = true)]
    public class UserInstitutionForm
    {
        public Int32 UserId { get; set; }
        public Int32 InstitutionId { get; set; }
    }
}