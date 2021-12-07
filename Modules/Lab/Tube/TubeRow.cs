using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Tube]")]
    [DisplayName("Tube"), InstanceName("Tube")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class TubeRow : BaseRow<TubeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Material"), NotNull, ForeignKey("[dbo].[Material]", "Id"), LeftJoin("jMaterial"), TextualField("MaterialName")]
        public Int32? MaterialId
        {
            get => fields.MaterialId[this];
            set => fields.MaterialId[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Bar"), NotNull]
        public Int32? Bar
        {
            get => fields.Bar[this];
            set => fields.Bar[this] = value;
        }

        [DisplayName("Material Name"), Expression("jMaterial.[Name]")]
        public String MaterialName
        {
            get => fields.MaterialName[this];
            set => fields.MaterialName[this] = value;
        }

        [DisplayName("Material Insert Date"), Expression("jMaterial.[InsertDate]")]
        public DateTime? MaterialInsertDate
        {
            get => fields.MaterialInsertDate[this];
            set => fields.MaterialInsertDate[this] = value;
        }

        [DisplayName("Material Insert User Id"), Expression("jMaterial.[InsertUserId]")]
        public Int32? MaterialInsertUserId
        {
            get => fields.MaterialInsertUserId[this];
            set => fields.MaterialInsertUserId[this] = value;
        }

        [DisplayName("Material Update Date"), Expression("jMaterial.[UpdateDate]")]
        public DateTime? MaterialUpdateDate
        {
            get => fields.MaterialUpdateDate[this];
            set => fields.MaterialUpdateDate[this] = value;
        }

        [DisplayName("Material Update User Id"), Expression("jMaterial.[UpdateUserId]")]
        public Int32? MaterialUpdateUserId
        {
            get => fields.MaterialUpdateUserId[this];
            set => fields.MaterialUpdateUserId[this] = value;
        }

        [DisplayName("Material Is Active"), Expression("jMaterial.[IsActive]")]
        public Int16? MaterialIsActive
        {
            get => fields.MaterialIsActive[this];
            set => fields.MaterialIsActive[this] = value;
        }

        public TubeRow()
            : base()
        {
        }

        public TubeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field MaterialId;
            public StringField Name;
            public Int32Field Bar;

            public StringField MaterialName;
            public DateTimeField MaterialInsertDate;
            public Int32Field MaterialInsertUserId;
            public DateTimeField MaterialUpdateDate;
            public Int32Field MaterialUpdateUserId;
            public Int16Field MaterialIsActive;
        }
    }
}
