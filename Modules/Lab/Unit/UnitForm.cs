using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Unit")]
    [BasedOnRow(typeof(UnitRow), CheckNames = true)]
    public class UnitForm
    {
        public Int32 LaboratoryId { get; set; }
        public Int32 TubeId { get; set; }
        public Int32 Type { get; set; }
        public String Name { get; set; }
        public Int32 Sort { get; set; }
        public Int32 TimetoResults { get; set; }
        public Boolean IsAssayBarcode { get; set; }
    }
}