using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Antibiogram")]
    [BasedOnRow(typeof(AntibiogramRow), CheckNames = true)]
    public class AntibiogramForm
    {
        public Int32 BacteriumId { get; set; }
        public Int32 AssayId { get; set; }
        public String Result { get; set; }
        public String Description { get; set; }
        public Boolean Hide { get; set; }
    }
}