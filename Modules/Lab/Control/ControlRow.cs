using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Control]")]
    [DisplayName("Control"), InstanceName("Control")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class ControlRow : BaseRow<ControlRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Levels"), NotNull, ForeignKey("[dbo].[Levels]", "Id"), LeftJoin("jLevels"), TextualField("LevelsName")]
        public Int32? LevelsId
        {
            get => fields.LevelsId[this];
            set => fields.LevelsId[this] = value;
        }

        [DisplayName("Record Date"), NotNull]
        public DateTime? RecordDate
        {
            get => fields.RecordDate[this];
            set => fields.RecordDate[this] = value;
        }

        [DisplayName("Result"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Result
        {
            get => fields.Result[this];
            set => fields.Result[this] = value;
        }

        [DisplayName("Description"), Size(250)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Levels Code Id"), Expression("jLevels.[CodeId]")]
        public Int32? LevelsCodeId
        {
            get => fields.LevelsCodeId[this];
            set => fields.LevelsCodeId[this] = value;
        }

        [DisplayName("Levels Name"), Expression("jLevels.[Name]")]
        public String LevelsName
        {
            get => fields.LevelsName[this];
            set => fields.LevelsName[this] = value;
        }

        [DisplayName("Levels Low"), Expression("jLevels.[Low]")]
        public Decimal? LevelsLow
        {
            get => fields.LevelsLow[this];
            set => fields.LevelsLow[this] = value;
        }

        [DisplayName("Levels High"), Expression("jLevels.[High]")]
        public Decimal? LevelsHigh
        {
            get => fields.LevelsHigh[this];
            set => fields.LevelsHigh[this] = value;
        }

        [DisplayName("Levels Lot"), Expression("jLevels.[Lot]")]
        public String LevelsLot
        {
            get => fields.LevelsLot[this];
            set => fields.LevelsLot[this] = value;
        }

        [DisplayName("Levels Hide"), Expression("jLevels.[Hide]")]
        public Boolean? LevelsHide
        {
            get => fields.LevelsHide[this];
            set => fields.LevelsHide[this] = value;
        }

        [DisplayName("Levels Insert Date"), Expression("jLevels.[InsertDate]")]
        public DateTime? LevelsInsertDate
        {
            get => fields.LevelsInsertDate[this];
            set => fields.LevelsInsertDate[this] = value;
        }

        [DisplayName("Levels Insert User Id"), Expression("jLevels.[InsertUserId]")]
        public Int32? LevelsInsertUserId
        {
            get => fields.LevelsInsertUserId[this];
            set => fields.LevelsInsertUserId[this] = value;
        }

        [DisplayName("Levels Update Date"), Expression("jLevels.[UpdateDate]")]
        public DateTime? LevelsUpdateDate
        {
            get => fields.LevelsUpdateDate[this];
            set => fields.LevelsUpdateDate[this] = value;
        }

        [DisplayName("Levels Update User Id"), Expression("jLevels.[UpdateUserId]")]
        public Int32? LevelsUpdateUserId
        {
            get => fields.LevelsUpdateUserId[this];
            set => fields.LevelsUpdateUserId[this] = value;
        }

        [DisplayName("Levels Is Active"), Expression("jLevels.[IsActive]")]
        public Int16? LevelsIsActive
        {
            get => fields.LevelsIsActive[this];
            set => fields.LevelsIsActive[this] = value;
        }

        public ControlRow()
            : base()
        {
        }

        public ControlRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field LevelsId;
            public DateTimeField RecordDate;
            public StringField Result;
            public StringField Description;

            public Int32Field LevelsCodeId;
            public StringField LevelsName;
            public DecimalField LevelsLow;
            public DecimalField LevelsHigh;
            public StringField LevelsLot;
            public BooleanField LevelsHide;
            public DateTimeField LevelsInsertDate;
            public Int32Field LevelsInsertUserId;
            public DateTimeField LevelsUpdateDate;
            public Int32Field LevelsUpdateUserId;
            public Int16Field LevelsIsActive;
        }
    }
}
