using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Description]")]
    [DisplayName("Description"), InstanceName("Description")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class DescriptionRow : BaseRow<DescriptionRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Type"), NotNull]
        public Int32? Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }

        [DisplayName("Description"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Code"), Size(100)]
        public String Code
        {
            get => fields.Code[this];
            set => fields.Code[this] = value;
        }

        public DescriptionRow()
            : base()
        {
        }

        public DescriptionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field Type;
            public StringField Description;
            public StringField Code;
        }
    }
}
