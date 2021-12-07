using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace LBYS.Lab
{
    public partial class IdFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "LBYS.Lab.IdFormatter";

        public IdFormatterAttribute()
            : base(Key)
        {
        }
    }
}
