using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Industry]")]
    [DisplayName("Industry"), InstanceName("Industry")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class IndustryRow : BaseRow<IndustryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Phone"), Size(15)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Address"), Size(500)]
        public String Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        public IndustryRow()
            : base()
        {
        }

        public IndustryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Phone;
            public StringField Address;
        }
    }
}
