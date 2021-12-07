using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Claim")]
    [BasedOnRow(typeof(ClaimRow), CheckNames = true)]
    public class ClaimForm
    {
        public Int32 LaboratoryId { get; set; }
        public DateTime RecordDate { get; set; }
        public Int32 InstitutionId { get; set; }
        public Int32 PatientId { get; set; }
        public Int16 ClaimType { get; set; }
        public Int32 Priorty { get; set; }
        public String Description { get; set; }
        public Int32 InvoiceId { get; set; }
        public Int32 PaymentType { get; set; }
        public Boolean PaymentStatus { get; set; }
        public Decimal Fee { get; set; }
        public Decimal Price { get; set; }
    }
}