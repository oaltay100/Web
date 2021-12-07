using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Levels]")]
    [DisplayName("Levels"), InstanceName("Levels")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class LevelsRow : BaseRow<LevelsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Code"), NotNull, ForeignKey("[dbo].[Code]", "Id"), LeftJoin("jCode"), TextualField("Code")]
        public Int32? CodeId
        {
            get => fields.CodeId[this];
            set => fields.CodeId[this] = value;
        }

        [DisplayName("Name"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Low"), Size(19), Scale(5), NotNull]
        public Decimal? Low
        {
            get => fields.Low[this];
            set => fields.Low[this] = value;
        }

        [DisplayName("High"), Size(19), Scale(5), NotNull]
        public Decimal? High
        {
            get => fields.High[this];
            set => fields.High[this] = value;
        }

        [DisplayName("Lot"), Size(50), NotNull]
        public String Lot
        {
            get => fields.Lot[this];
            set => fields.Lot[this] = value;
        }

        [DisplayName("Hide"), NotNull]
        public Boolean? Hide
        {
            get => fields.Hide[this];
            set => fields.Hide[this] = value;
        }

        [DisplayName("Code Assay Id"), Expression("jCode.[AssayId]")]
        public Int32? CodeAssayId
        {
            get => fields.CodeAssayId[this];
            set => fields.CodeAssayId[this] = value;
        }

        [DisplayName("Code Device Id"), Expression("jCode.[DeviceId]")]
        public Int32? CodeDeviceId
        {
            get => fields.CodeDeviceId[this];
            set => fields.CodeDeviceId[this] = value;
        }

        [DisplayName("Code"), Expression("jCode.[Code]")]
        public String Code
        {
            get => fields.Code[this];
            set => fields.Code[this] = value;
        }

        [DisplayName("Code Factor"), Expression("jCode.[Factor]")]
        public Decimal? CodeFactor
        {
            get => fields.CodeFactor[this];
            set => fields.CodeFactor[this] = value;
        }

        [DisplayName("Code Digit"), Expression("jCode.[Digit]")]
        public Int32? CodeDigit
        {
            get => fields.CodeDigit[this];
            set => fields.CodeDigit[this] = value;
        }

        [DisplayName("Code Direction"), Expression("jCode.[Direction]")]
        public Boolean? CodeDirection
        {
            get => fields.CodeDirection[this];
            set => fields.CodeDirection[this] = value;
        }

        [DisplayName("Code Insert Date"), Expression("jCode.[InsertDate]")]
        public DateTime? CodeInsertDate
        {
            get => fields.CodeInsertDate[this];
            set => fields.CodeInsertDate[this] = value;
        }

        [DisplayName("Code Insert User Id"), Expression("jCode.[InsertUserId]")]
        public Int32? CodeInsertUserId
        {
            get => fields.CodeInsertUserId[this];
            set => fields.CodeInsertUserId[this] = value;
        }

        [DisplayName("Code Update Date"), Expression("jCode.[UpdateDate]")]
        public DateTime? CodeUpdateDate
        {
            get => fields.CodeUpdateDate[this];
            set => fields.CodeUpdateDate[this] = value;
        }

        [DisplayName("Code Update User Id"), Expression("jCode.[UpdateUserId]")]
        public Int32? CodeUpdateUserId
        {
            get => fields.CodeUpdateUserId[this];
            set => fields.CodeUpdateUserId[this] = value;
        }

        [DisplayName("Code Is Active"), Expression("jCode.[IsActive]")]
        public Int16? CodeIsActive
        {
            get => fields.CodeIsActive[this];
            set => fields.CodeIsActive[this] = value;
        }

        public LevelsRow()
            : base()
        {
        }

        public LevelsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field CodeId;
            public StringField Name;
            public DecimalField Low;
            public DecimalField High;
            public StringField Lot;
            public BooleanField Hide;

            public Int32Field CodeAssayId;
            public Int32Field CodeDeviceId;
            public StringField Code;
            public DecimalField CodeFactor;
            public Int32Field CodeDigit;
            public BooleanField CodeDirection;
            public DateTimeField CodeInsertDate;
            public Int32Field CodeInsertUserId;
            public DateTimeField CodeUpdateDate;
            public Int32Field CodeUpdateUserId;
            public Int16Field CodeIsActive;
        }
    }
}
