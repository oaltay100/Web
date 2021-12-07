using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Assay]")]
    [DisplayName("Assay"), InstanceName("Assay")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class AssayRow : BaseRow<AssayRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Sut"), NotNull, ForeignKey("[dbo].[Sut]", "Id"), LeftJoin("jSut"), TextualField("SutName")]
        public Int32? SutId
        {
            get => fields.SutId[this];
            set => fields.SutId[this] = value;
        }

        [DisplayName("Parent"), ForeignKey("[dbo].[Assay]", "Id"), LeftJoin("jParent"), TextualField("ParentUnit")]
        public Int32? ParentId
        {
            get => fields.ParentId[this];
            set => fields.ParentId[this] = value;
        }

        [DisplayName("Unit"), Size(50), QuickSearch, NameProperty]
        public String Unit
        {
            get => fields.Unit[this];
            set => fields.Unit[this] = value;
        }

        [DisplayName("Result Type"), NotNull]
        public Int32? ResultType
        {
            get => fields.ResultType[this];
            set => fields.ResultType[this] = value;
        }

        [DisplayName("Sort")]
        public Int32? Sort
        {
            get => fields.Sort[this];
            set => fields.Sort[this] = value;
        }

        [DisplayName("Formula"), Size(500)]
        public String Formula
        {
            get => fields.Formula[this];
            set => fields.Formula[this] = value;
        }

        [DisplayName("Hide"), NotNull]
        public Boolean? Hide
        {
            get => fields.Hide[this];
            set => fields.Hide[this] = value;
        }

        [DisplayName("Method"), Size(50)]
        public String Method
        {
            get => fields.Method[this];
            set => fields.Method[this] = value;
        }

        [DisplayName("Melis Id")]
        public Int32? MelisId
        {
            get => fields.MelisId[this];
            set => fields.MelisId[this] = value;
        }

        [DisplayName("Price"), Size(19), Scale(5)]
        public Decimal? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Price2"), Size(19), Scale(5)]
        public Decimal? Price2
        {
            get => fields.Price2[this];
            set => fields.Price2[this] = value;
        }

        [DisplayName("Default Value"), Size(200)]
        public String DefaultValue
        {
            get => fields.DefaultValue[this];
            set => fields.DefaultValue[this] = value;
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

        [DisplayName("Sut Name"), Expression("jSut.[Name]")]
        public String SutName
        {
            get => fields.SutName[this];
            set => fields.SutName[this] = value;
        }

        [DisplayName("Sut Code"), Expression("jSut.[Code]")]
        public String SutCode
        {
            get => fields.SutCode[this];
            set => fields.SutCode[this] = value;
        }

        [DisplayName("Sut Loinc"), Expression("jSut.[Loinc]")]
        public String SutLoinc
        {
            get => fields.SutLoinc[this];
            set => fields.SutLoinc[this] = value;
        }

        [DisplayName("Sut Point"), Expression("jSut.[Point]")]
        public Decimal? SutPoint
        {
            get => fields.SutPoint[this];
            set => fields.SutPoint[this] = value;
        }

        [DisplayName("Sut Insert Date"), Expression("jSut.[InsertDate]")]
        public DateTime? SutInsertDate
        {
            get => fields.SutInsertDate[this];
            set => fields.SutInsertDate[this] = value;
        }

        [DisplayName("Sut Insert User Id"), Expression("jSut.[InsertUserId]")]
        public Int32? SutInsertUserId
        {
            get => fields.SutInsertUserId[this];
            set => fields.SutInsertUserId[this] = value;
        }

        [DisplayName("Sut Update Date"), Expression("jSut.[UpdateDate]")]
        public DateTime? SutUpdateDate
        {
            get => fields.SutUpdateDate[this];
            set => fields.SutUpdateDate[this] = value;
        }

        [DisplayName("Sut Update User Id"), Expression("jSut.[UpdateUserId]")]
        public Int32? SutUpdateUserId
        {
            get => fields.SutUpdateUserId[this];
            set => fields.SutUpdateUserId[this] = value;
        }

        [DisplayName("Sut Is Active"), Expression("jSut.[IsActive]")]
        public Int16? SutIsActive
        {
            get => fields.SutIsActive[this];
            set => fields.SutIsActive[this] = value;
        }

        [DisplayName("Parent Unit Id"), Expression("jParent.[UnitId]")]
        public Int32? ParentUnitId
        {
            get => fields.ParentUnitId[this];
            set => fields.ParentUnitId[this] = value;
        }

        [DisplayName("Parent Sut Id"), Expression("jParent.[SutId]")]
        public Int32? ParentSutId
        {
            get => fields.ParentSutId[this];
            set => fields.ParentSutId[this] = value;
        }

        [DisplayName("Parent Parent Id"), Expression("jParent.[ParentId]")]
        public Int32? ParentParentId
        {
            get => fields.ParentParentId[this];
            set => fields.ParentParentId[this] = value;
        }

        [DisplayName("Parent Unit"), Expression("jParent.[Unit]")]
        public String ParentUnit
        {
            get => fields.ParentUnit[this];
            set => fields.ParentUnit[this] = value;
        }

        [DisplayName("Parent Result Type"), Expression("jParent.[ResultType]")]
        public Int32? ParentResultType
        {
            get => fields.ParentResultType[this];
            set => fields.ParentResultType[this] = value;
        }

        [DisplayName("Parent Sort"), Expression("jParent.[Sort]")]
        public Int32? ParentSort
        {
            get => fields.ParentSort[this];
            set => fields.ParentSort[this] = value;
        }

        [DisplayName("Parent Formula"), Expression("jParent.[Formula]")]
        public String ParentFormula
        {
            get => fields.ParentFormula[this];
            set => fields.ParentFormula[this] = value;
        }

        [DisplayName("Parent Hide"), Expression("jParent.[Hide]")]
        public Boolean? ParentHide
        {
            get => fields.ParentHide[this];
            set => fields.ParentHide[this] = value;
        }

        [DisplayName("Parent Method"), Expression("jParent.[Method]")]
        public String ParentMethod
        {
            get => fields.ParentMethod[this];
            set => fields.ParentMethod[this] = value;
        }

        [DisplayName("Parent Melis Id"), Expression("jParent.[MelisId]")]
        public Int32? ParentMelisId
        {
            get => fields.ParentMelisId[this];
            set => fields.ParentMelisId[this] = value;
        }

        [DisplayName("Parent Price"), Expression("jParent.[Price]")]
        public Decimal? ParentPrice
        {
            get => fields.ParentPrice[this];
            set => fields.ParentPrice[this] = value;
        }

        [DisplayName("Parent Price2"), Expression("jParent.[Price2]")]
        public Decimal? ParentPrice2
        {
            get => fields.ParentPrice2[this];
            set => fields.ParentPrice2[this] = value;
        }

        [DisplayName("Parent Default Value"), Expression("jParent.[DefaultValue]")]
        public String ParentDefaultValue
        {
            get => fields.ParentDefaultValue[this];
            set => fields.ParentDefaultValue[this] = value;
        }

        [DisplayName("Parent Insert Date"), Expression("jParent.[InsertDate]")]
        public DateTime? ParentInsertDate
        {
            get => fields.ParentInsertDate[this];
            set => fields.ParentInsertDate[this] = value;
        }

        [DisplayName("Parent Insert User Id"), Expression("jParent.[InsertUserId]")]
        public Int32? ParentInsertUserId
        {
            get => fields.ParentInsertUserId[this];
            set => fields.ParentInsertUserId[this] = value;
        }

        [DisplayName("Parent Update Date"), Expression("jParent.[UpdateDate]")]
        public DateTime? ParentUpdateDate
        {
            get => fields.ParentUpdateDate[this];
            set => fields.ParentUpdateDate[this] = value;
        }

        [DisplayName("Parent Update User Id"), Expression("jParent.[UpdateUserId]")]
        public Int32? ParentUpdateUserId
        {
            get => fields.ParentUpdateUserId[this];
            set => fields.ParentUpdateUserId[this] = value;
        }

        [DisplayName("Parent Is Active"), Expression("jParent.[IsActive]")]
        public Int16? ParentIsActive
        {
            get => fields.ParentIsActive[this];
            set => fields.ParentIsActive[this] = value;
        }

        public AssayRow()
            : base()
        {
        }

        public AssayRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field UnitId;
            public Int32Field SutId;
            public Int32Field ParentId;
            public StringField Unit;
            public Int32Field ResultType;
            public Int32Field Sort;
            public StringField Formula;
            public BooleanField Hide;
            public StringField Method;
            public Int32Field MelisId;
            public DecimalField Price;
            public DecimalField Price2;
            public StringField DefaultValue;

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

            public StringField SutName;
            public StringField SutCode;
            public StringField SutLoinc;
            public DecimalField SutPoint;
            public DateTimeField SutInsertDate;
            public Int32Field SutInsertUserId;
            public DateTimeField SutUpdateDate;
            public Int32Field SutUpdateUserId;
            public Int16Field SutIsActive;

            public Int32Field ParentUnitId;
            public Int32Field ParentSutId;
            public Int32Field ParentParentId;
            public StringField ParentUnit;
            public Int32Field ParentResultType;
            public Int32Field ParentSort;
            public StringField ParentFormula;
            public BooleanField ParentHide;
            public StringField ParentMethod;
            public Int32Field ParentMelisId;
            public DecimalField ParentPrice;
            public DecimalField ParentPrice2;
            public StringField ParentDefaultValue;
            public DateTimeField ParentInsertDate;
            public Int32Field ParentInsertUserId;
            public DateTimeField ParentUpdateDate;
            public Int32Field ParentUpdateUserId;
            public Int16Field ParentIsActive;
        }
    }
}
