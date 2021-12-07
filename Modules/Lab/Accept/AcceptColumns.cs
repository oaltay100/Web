using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Accept")]
    [BasedOnRow(typeof(AcceptRow), CheckNames = true)]
    public class AcceptColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String SampleRack { get; set; }
        public Int32 Accept { get; set; }
        public DateTime AcceptDate { get; set; }
        public String AcceptUserUsername { get; set; }
    }
}