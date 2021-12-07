using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Lek]")]
    [DisplayName("Lek"), InstanceName("Lek")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class LekRow : BaseRow<LekRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Unit"), NotNull, ForeignKey("[dbo].[Unit]", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]
        public Int32? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Type"), NotNull]
        public Int32? Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }

        [DisplayName("Lek"), NotNull]
        public Int32? Lek
        {
            get => fields.Lek[this];
            set => fields.Lek[this] = value;
        }

        [DisplayName("Warning"), NotNull]
        public Int32? Warning
        {
            get => fields.Warning[this];
            set => fields.Warning[this] = value;
        }

        [DisplayName("Error"), NotNull]
        public Int32? Error
        {
            get => fields.Error[this];
            set => fields.Error[this] = value;
        }

        [DisplayName("Unit Laboratory Id"), Expression("jUnit.[LaboratoryId]")]
        public Int32? UnitLaboratoryId
        {
            get => fields.UnitLaboratoryId[this];
            set => fields.UnitLaboratoryId[this] = value;
        }

        [DisplayName("Unit Tube Id"), Expression("jUnit.[TubeId]")]
        public Int32? UnitTubeId
        {
            get => fields.UnitTubeId[this];
            set => fields.UnitTubeId[this] = value;
        }

        [DisplayName("Unit Type"), Expression("jUnit.[Type]")]
        public Int32? UnitType
        {
            get => fields.UnitType[this];
            set => fields.UnitType[this] = value;
        }

        [DisplayName("Unit Name"), Expression("jUnit.[Name]")]
        public String UnitName
        {
            get => fields.UnitName[this];
            set => fields.UnitName[this] = value;
        }

        [DisplayName("Unit Sort"), Expression("jUnit.[Sort]")]
        public Int32? UnitSort
        {
            get => fields.UnitSort[this];
            set => fields.UnitSort[this] = value;
        }

        [DisplayName("Unit Timeto Results"), Expression("jUnit.[TimetoResults]")]
        public Int32? UnitTimetoResults
        {
            get => fields.UnitTimetoResults[this];
            set => fields.UnitTimetoResults[this] = value;
        }

        [DisplayName("Unit Is Assay Barcode"), Expression("jUnit.[IsAssayBarcode]")]
        public Boolean? UnitIsAssayBarcode
        {
            get => fields.UnitIsAssayBarcode[this];
            set => fields.UnitIsAssayBarcode[this] = value;
        }

        [DisplayName("Unit Insert Date"), Expression("jUnit.[InsertDate]")]
        public DateTime? UnitInsertDate
        {
            get => fields.UnitInsertDate[this];
            set => fields.UnitInsertDate[this] = value;
        }

        [DisplayName("Unit Insert User Id"), Expression("jUnit.[InsertUserId]")]
        public Int32? UnitInsertUserId
        {
            get => fields.UnitInsertUserId[this];
            set => fields.UnitInsertUserId[this] = value;
        }

        [DisplayName("Unit Update Date"), Expression("jUnit.[UpdateDate]")]
        public DateTime? UnitUpdateDate
        {
            get => fields.UnitUpdateDate[this];
            set => fields.UnitUpdateDate[this] = value;
        }

        [DisplayName("Unit Update User Id"), Expression("jUnit.[UpdateUserId]")]
        public Int32? UnitUpdateUserId
        {
            get => fields.UnitUpdateUserId[this];
            set => fields.UnitUpdateUserId[this] = value;
        }

        [DisplayName("Unit Is Active"), Expression("jUnit.[IsActive]")]
        public Int16? UnitIsActive
        {
            get => fields.UnitIsActive[this];
            set => fields.UnitIsActive[this] = value;
        }

        public LekRow()
            : base()
        {
        }

        public LekRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field UnitId;
            public Int32Field Type;
            public Int32Field Lek;
            public Int32Field Warning;
            public Int32Field Error;

            public Int32Field UnitLaboratoryId;
            public Int32Field UnitTubeId;
            public Int32Field UnitType;
            public StringField UnitName;
            public Int32Field UnitSort;
            public Int32Field UnitTimetoResults;
            public BooleanField UnitIsAssayBarcode;
            public DateTimeField UnitInsertDate;
            public Int32Field UnitInsertUserId;
            public DateTimeField UnitUpdateDate;
            public Int32Field UnitUpdateUserId;
            public Int16Field UnitIsActive;
        }
    }
}
