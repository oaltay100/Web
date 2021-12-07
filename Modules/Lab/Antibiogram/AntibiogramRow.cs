using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Antibiogram]")]
    [DisplayName("Antibiogram"), InstanceName("Antibiogram")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class AntibiogramRow : BaseRow<AntibiogramRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Use Idr Id"), Identity, IdProperty]
        public Int32? UseIdrId
        {
            get => fields.UseIdrId[this];
            set => fields.UseIdrId[this] = value;
        }

        [DisplayName("Bacterium"), NotNull, ForeignKey("[dbo].[Bacterium]", "Id"), LeftJoin("jBacterium"), TextualField("BacteriumName")]
        public Int32? BacteriumId
        {
            get => fields.BacteriumId[this];
            set => fields.BacteriumId[this] = value;
        }

        [DisplayName("Assay"), NotNull, ForeignKey("[dbo].[Assay]", "Id"), LeftJoin("jAssay"), TextualField("AssayUnit")]
        public Int32? AssayId
        {
            get => fields.AssayId[this];
            set => fields.AssayId[this] = value;
        }

        [DisplayName("Result"), Size(250), QuickSearch, NameProperty]
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

        [DisplayName("Hide"), NotNull]
        public Boolean? Hide
        {
            get => fields.Hide[this];
            set => fields.Hide[this] = value;
        }

        [DisplayName("Bacterium Detail Id"), Expression("jBacterium.[DetailId]")]
        public Int32? BacteriumDetailId
        {
            get => fields.BacteriumDetailId[this];
            set => fields.BacteriumDetailId[this] = value;
        }

        [DisplayName("Bacterium Assay Id"), Expression("jBacterium.[AssayId]")]
        public Int32? BacteriumAssayId
        {
            get => fields.BacteriumAssayId[this];
            set => fields.BacteriumAssayId[this] = value;
        }

        [DisplayName("Bacterium Name"), Expression("jBacterium.[Name]")]
        public String BacteriumName
        {
            get => fields.BacteriumName[this];
            set => fields.BacteriumName[this] = value;
        }

        [DisplayName("Bacterium Result"), Expression("jBacterium.[Result]")]
        public String BacteriumResult
        {
            get => fields.BacteriumResult[this];
            set => fields.BacteriumResult[this] = value;
        }

        [DisplayName("Bacterium Description Id"), Expression("jBacterium.[DescriptionId]")]
        public Int32? BacteriumDescriptionId
        {
            get => fields.BacteriumDescriptionId[this];
            set => fields.BacteriumDescriptionId[this] = value;
        }

        [DisplayName("Bacterium Colony"), Expression("jBacterium.[Colony]")]
        public String BacteriumColony
        {
            get => fields.BacteriumColony[this];
            set => fields.BacteriumColony[this] = value;
        }

        [DisplayName("Bacterium Type"), Expression("jBacterium.[Type]")]
        public Int32? BacteriumType
        {
            get => fields.BacteriumType[this];
            set => fields.BacteriumType[this] = value;
        }

        [DisplayName("Bacterium Insert Date"), Expression("jBacterium.[InsertDate]")]
        public DateTime? BacteriumInsertDate
        {
            get => fields.BacteriumInsertDate[this];
            set => fields.BacteriumInsertDate[this] = value;
        }

        [DisplayName("Bacterium Insert User Id"), Expression("jBacterium.[InsertUserId]")]
        public Int32? BacteriumInsertUserId
        {
            get => fields.BacteriumInsertUserId[this];
            set => fields.BacteriumInsertUserId[this] = value;
        }

        [DisplayName("Bacterium Update Date"), Expression("jBacterium.[UpdateDate]")]
        public DateTime? BacteriumUpdateDate
        {
            get => fields.BacteriumUpdateDate[this];
            set => fields.BacteriumUpdateDate[this] = value;
        }

        [DisplayName("Bacterium Update User Id"), Expression("jBacterium.[UpdateUserId]")]
        public Int32? BacteriumUpdateUserId
        {
            get => fields.BacteriumUpdateUserId[this];
            set => fields.BacteriumUpdateUserId[this] = value;
        }

        [DisplayName("Bacterium Is Active"), Expression("jBacterium.[IsActive]")]
        public Int16? BacteriumIsActive
        {
            get => fields.BacteriumIsActive[this];
            set => fields.BacteriumIsActive[this] = value;
        }

        [DisplayName("Assay Unit Id"), Expression("jAssay.[UnitId]")]
        public Int32? AssayUnitId
        {
            get => fields.AssayUnitId[this];
            set => fields.AssayUnitId[this] = value;
        }

        [DisplayName("Assay Sut Id"), Expression("jAssay.[SutId]")]
        public Int32? AssaySutId
        {
            get => fields.AssaySutId[this];
            set => fields.AssaySutId[this] = value;
        }

        [DisplayName("Assay Parent Id"), Expression("jAssay.[ParentId]")]
        public Int32? AssayParentId
        {
            get => fields.AssayParentId[this];
            set => fields.AssayParentId[this] = value;
        }

        [DisplayName("Assay Unit"), Expression("jAssay.[Unit]")]
        public String AssayUnit
        {
            get => fields.AssayUnit[this];
            set => fields.AssayUnit[this] = value;
        }

        [DisplayName("Assay Result Type"), Expression("jAssay.[ResultType]")]
        public Int32? AssayResultType
        {
            get => fields.AssayResultType[this];
            set => fields.AssayResultType[this] = value;
        }

        [DisplayName("Assay Sort"), Expression("jAssay.[Sort]")]
        public Int32? AssaySort
        {
            get => fields.AssaySort[this];
            set => fields.AssaySort[this] = value;
        }

        [DisplayName("Assay Formula"), Expression("jAssay.[Formula]")]
        public String AssayFormula
        {
            get => fields.AssayFormula[this];
            set => fields.AssayFormula[this] = value;
        }

        [DisplayName("Assay Hide"), Expression("jAssay.[Hide]")]
        public Boolean? AssayHide
        {
            get => fields.AssayHide[this];
            set => fields.AssayHide[this] = value;
        }

        [DisplayName("Assay Method"), Expression("jAssay.[Method]")]
        public String AssayMethod
        {
            get => fields.AssayMethod[this];
            set => fields.AssayMethod[this] = value;
        }

        [DisplayName("Assay Melis Id"), Expression("jAssay.[MelisId]")]
        public Int32? AssayMelisId
        {
            get => fields.AssayMelisId[this];
            set => fields.AssayMelisId[this] = value;
        }

        [DisplayName("Assay Price"), Expression("jAssay.[Price]")]
        public Decimal? AssayPrice
        {
            get => fields.AssayPrice[this];
            set => fields.AssayPrice[this] = value;
        }

        [DisplayName("Assay Price2"), Expression("jAssay.[Price2]")]
        public Decimal? AssayPrice2
        {
            get => fields.AssayPrice2[this];
            set => fields.AssayPrice2[this] = value;
        }

        [DisplayName("Assay Default Value"), Expression("jAssay.[DefaultValue]")]
        public String AssayDefaultValue
        {
            get => fields.AssayDefaultValue[this];
            set => fields.AssayDefaultValue[this] = value;
        }

        [DisplayName("Assay Insert Date"), Expression("jAssay.[InsertDate]")]
        public DateTime? AssayInsertDate
        {
            get => fields.AssayInsertDate[this];
            set => fields.AssayInsertDate[this] = value;
        }

        [DisplayName("Assay Insert User Id"), Expression("jAssay.[InsertUserId]")]
        public Int32? AssayInsertUserId
        {
            get => fields.AssayInsertUserId[this];
            set => fields.AssayInsertUserId[this] = value;
        }

        [DisplayName("Assay Update Date"), Expression("jAssay.[UpdateDate]")]
        public DateTime? AssayUpdateDate
        {
            get => fields.AssayUpdateDate[this];
            set => fields.AssayUpdateDate[this] = value;
        }

        [DisplayName("Assay Update User Id"), Expression("jAssay.[UpdateUserId]")]
        public Int32? AssayUpdateUserId
        {
            get => fields.AssayUpdateUserId[this];
            set => fields.AssayUpdateUserId[this] = value;
        }

        [DisplayName("Assay Is Active"), Expression("jAssay.[IsActive]")]
        public Int16? AssayIsActive
        {
            get => fields.AssayIsActive[this];
            set => fields.AssayIsActive[this] = value;
        }

        public AntibiogramRow()
            : base()
        {
        }

        public AntibiogramRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field UseIdrId;
            public Int32Field BacteriumId;
            public Int32Field AssayId;
            public StringField Result;
            public StringField Description;
            public BooleanField Hide;

            public Int32Field BacteriumDetailId;
            public Int32Field BacteriumAssayId;
            public StringField BacteriumName;
            public StringField BacteriumResult;
            public Int32Field BacteriumDescriptionId;
            public StringField BacteriumColony;
            public Int32Field BacteriumType;
            public DateTimeField BacteriumInsertDate;
            public Int32Field BacteriumInsertUserId;
            public DateTimeField BacteriumUpdateDate;
            public Int32Field BacteriumUpdateUserId;
            public Int16Field BacteriumIsActive;

            public Int32Field AssayUnitId;
            public Int32Field AssaySutId;
            public Int32Field AssayParentId;
            public StringField AssayUnit;
            public Int32Field AssayResultType;
            public Int32Field AssaySort;
            public StringField AssayFormula;
            public BooleanField AssayHide;
            public StringField AssayMethod;
            public Int32Field AssayMelisId;
            public DecimalField AssayPrice;
            public DecimalField AssayPrice2;
            public StringField AssayDefaultValue;
            public DateTimeField AssayInsertDate;
            public Int32Field AssayInsertUserId;
            public DateTimeField AssayUpdateDate;
            public Int32Field AssayUpdateUserId;
            public Int16Field AssayIsActive;
        }
    }
}
