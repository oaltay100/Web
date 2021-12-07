using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Columns
{
    [ColumnsScript("Lab.Institution")]
    [BasedOnRow(typeof(InstitutionRow), CheckNames = true)]
    public class InstitutionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String LaboratoryName { get; set; }
        public String IndustryName { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Phone { get; set; }
        public String Address { get; set; }
        public Int32 PaymentType { get; set; }
        public Decimal Price { get; set; }
        public Int32 PriceType { get; set; }
        public Boolean IsExternal { get; set; }
        public String Symbol { get; set; }
    }
}