using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Claim")]
    [BasedOnRow(typeof(ClaimRow), CheckNames = true)]
    public class ClaimColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        public DateTime RecordDate { get; set; }
        public String InstitutionName { get; set; }
        public String PatientName { get; set; }
        public Int16 ClaimType { get; set; }
        public Int32 Priorty { get; set; }
        [EditLink]
        public String Description { get; set; }
        public Int32 InvoiceId { get; set; }
        public Int32 PaymentType { get; set; }
        public Boolean PaymentStatus { get; set; }
        public Decimal Fee { get; set; }
        public Decimal Price { get; set; }
    }
}