using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.UserUnit")]
    [BasedOnRow(typeof(UserUnitRow), CheckNames = true)]
    public class UserUnitForm
    {
        public Int32 UserId { get; set; }
        public Int32 UnitId { get; set; }
    }
}