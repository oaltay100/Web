using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Invoice")]
    [BasedOnRow(typeof(InvoiceRow), CheckNames = true)]
    public class InvoiceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        public String InstitutionName { get; set; }
        public Int32 Year { get; set; }
        public Int32 Number { get; set; }
        public DateTime Date { get; set; }
        public Decimal Prite { get; set; }
        public Int32 Counts { get; set; }
        public Int32 Status { get; set; }
    }
}