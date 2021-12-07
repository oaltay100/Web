using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Laboratory")]
    [BasedOnRow(typeof(LaboratoryRow), CheckNames = true)]
    public class LaboratoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Logo { get; set; }
        public String Phone { get; set; }
        public String Fax { get; set; }
        public String EMail { get; set; }
        public String Address { get; set; }
        public String Mernis { get; set; }
        public String Institution { get; set; }
        public Boolean SrvMelis { get; set; }
        public Boolean SrvENabiz { get; set; }
        public Boolean SrvCovid { get; set; }
        public Boolean IsPaymentMandatory { get; set; }
        public Boolean IsAcceptrequired { get; set; }
        public Boolean IsDoNotReprint { get; set; }
    }
}