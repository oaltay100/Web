using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Control")]
    [BasedOnRow(typeof(ControlRow), CheckNames = true)]
    public class ControlForm
    {
        public Int32 LevelsId { get; set; }
        public DateTime RecordDate { get; set; }
        public String Result { get; set; }
        public String Description { get; set; }
    }
}