using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Sut]")]
    [DisplayName("Sut"), InstanceName("Sut")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class SutRow : BaseRow<SutRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Code"), Size(50)]
        public String Code
        {
            get => fields.Code[this];
            set => fields.Code[this] = value;
        }

        [DisplayName("Loinc"), Size(50)]
        public String Loinc
        {
            get => fields.Loinc[this];
            set => fields.Loinc[this] = value;
        }

        [DisplayName("Point"), Size(19), Scale(5)]
        public Decimal? Point
        {
            get => fields.Point[this];
            set => fields.Point[this] = value;
        }

        public SutRow()
            : base()
        {
        }

        public SutRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Code;
            public StringField Loinc;
            public DecimalField Point;
        }
    }
}
