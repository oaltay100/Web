using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Bacterium]")]
    [DisplayName("Bacterium"), InstanceName("Bacterium")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class BacteriumRow : BaseRow<BacteriumRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Detail"), NotNull, ForeignKey("[dbo].[Detail]", "Id"), LeftJoin("jDetail"), TextualField("DetailResult")]
        public Int32? DetailId
        {
            get => fields.DetailId[this];
            set => fields.DetailId[this] = value;
        }

        [DisplayName("Assay"), NotNull, ForeignKey("[dbo].[Assay]", "Id"), LeftJoin("jAssay"), TextualField("AssayUnit")]
        public Int32? AssayId
        {
            get => fields.AssayId[this];
            set => fields.AssayId[this] = value;
        }

        [DisplayName("Name"), Size(250), QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Result"), Size(250)]
        public String Result
        {
            get => fields.Result[this];
            set => fields.Result[this] = value;
        }

        [DisplayName("Description"), ForeignKey("[dbo].[Description]", "Id"), LeftJoin("jDescription"), TextualField("Description")]
        public Int32? DescriptionId
        {
            get => fields.DescriptionId[this];
            set => fields.DescriptionId[this] = value;
        }

        [DisplayName("Colony"), Size(20)]
        public String Colony
        {
            get => fields.Colony[this];
            set => fields.Colony[this] = value;
        }

        [DisplayName("Type")]
        public Int32? Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }

        [DisplayName("Detail Sample Id"), Expression("jDetail.[SampleId]")]
        public Int32? DetailSampleId
        {
            get => fields.DetailSampleId[this];
            set => fields.DetailSampleId[this] = value;
        }

        [DisplayName("Detail Assay Id"), Expression("jDetail.[AssayId]")]
        public Int32? DetailAssayId
        {
            get => fields.DetailAssayId[this];
            set => fields.DetailAssayId[this] = value;
        }

        [DisplayName("Detail Parent Id"), Expression("jDetail.[ParentId]")]
        public Int32? DetailParentId
        {
            get => fields.DetailParentId[this];
            set => fields.DetailParentId[this] = value;
        }

        [DisplayName("Detail Result"), Expression("jDetail.[Result]")]
        public String DetailResult
        {
            get => fields.DetailResult[this];
            set => fields.DetailResult[this] = value;
        }

        [DisplayName("Detail Result Date"), Expression("jDetail.[ResultDate]")]
        public DateTime? DetailResultDate
        {
            get => fields.DetailResultDate[this];
            set => fields.DetailResultDate[this] = value;
        }

        [DisplayName("Detail Result User Id"), Expression("jDetail.[ResultUserId]")]
        public Int32? DetailResultUserId
        {
            get => fields.DetailResultUserId[this];
            set => fields.DetailResultUserId[this] = value;
        }

        [DisplayName("Detail Device Id"), Expression("jDetail.[DeviceId]")]
        public Int32? DetailDeviceId
        {
            get => fields.DetailDeviceId[this];
            set => fields.DetailDeviceId[this] = value;
        }

        [DisplayName("Detail Device Date"), Expression("jDetail.[DeviceDate]")]
        public DateTime? DetailDeviceDate
        {
            get => fields.DetailDeviceDate[this];
            set => fields.DetailDeviceDate[this] = value;
        }

        [DisplayName("Detail Description Id"), Expression("jDetail.[DescriptionId]")]
        public Int32? DetailDescriptionId
        {
            get => fields.DetailDescriptionId[this];
            set => fields.DetailDescriptionId[this] = value;
        }

        [DisplayName("Detail Picture"), Expression("jDetail.[Picture]")]
        public String DetailPicture
        {
            get => fields.DetailPicture[this];
            set => fields.DetailPicture[this] = value;
        }

        [DisplayName("Detail Unit"), Expression("jDetail.[Unit]")]
        public String DetailUnit
        {
            get => fields.DetailUnit[this];
            set => fields.DetailUnit[this] = value;
        }

        [DisplayName("Detail N Low"), Expression("jDetail.[NLow]")]
        public Decimal? DetailNLow
        {
            get => fields.DetailNLow[this];
            set => fields.DetailNLow[this] = value;
        }

        [DisplayName("Detail N High"), Expression("jDetail.[NHigh]")]
        public Decimal? DetailNHigh
        {
            get => fields.DetailNHigh[this];
            set => fields.DetailNHigh[this] = value;
        }

        [DisplayName("Detail P Low"), Expression("jDetail.[PLow]")]
        public Decimal? DetailPLow
        {
            get => fields.DetailPLow[this];
            set => fields.DetailPLow[this] = value;
        }

        [DisplayName("Detail P High"), Expression("jDetail.[PHigh]")]
        public Decimal? DetailPHigh
        {
            get => fields.DetailPHigh[this];
            set => fields.DetailPHigh[this] = value;
        }

        [DisplayName("Detail Special"), Expression("jDetail.[Special]")]
        public String DetailSpecial
        {
            get => fields.DetailSpecial[this];
            set => fields.DetailSpecial[this] = value;
        }

        [DisplayName("Detail Importance"), Expression("jDetail.[Importance]")]
        public Int32? DetailImportance
        {
            get => fields.DetailImportance[this];
            set => fields.DetailImportance[this] = value;
        }

        [DisplayName("Detail Price"), Expression("jDetail.[Price]")]
        public Decimal? DetailPrice
        {
            get => fields.DetailPrice[this];
            set => fields.DetailPrice[this] = value;
        }

        [DisplayName("Detail Institution Id"), Expression("jDetail.[InstitutionId]")]
        public Int32? DetailInstitutionId
        {
            get => fields.DetailInstitutionId[this];
            set => fields.DetailInstitutionId[this] = value;
        }

        [DisplayName("Detail Insert Date"), Expression("jDetail.[InsertDate]")]
        public DateTime? DetailInsertDate
        {
            get => fields.DetailInsertDate[this];
            set => fields.DetailInsertDate[this] = value;
        }

        [DisplayName("Detail Insert User Id"), Expression("jDetail.[InsertUserId]")]
        public Int32? DetailInsertUserId
        {
            get => fields.DetailInsertUserId[this];
            set => fields.DetailInsertUserId[this] = value;
        }

        [DisplayName("Detail Update Date"), Expression("jDetail.[UpdateDate]")]
        public DateTime? DetailUpdateDate
        {
            get => fields.DetailUpdateDate[this];
            set => fields.DetailUpdateDate[this] = value;
        }

        [DisplayName("Detail Update User Id"), Expression("jDetail.[UpdateUserId]")]
        public Int32? DetailUpdateUserId
        {
            get => fields.DetailUpdateUserId[this];
            set => fields.DetailUpdateUserId[this] = value;
        }

        [DisplayName("Detail Is Active"), Expression("jDetail.[IsActive]")]
        public Int16? DetailIsActive
        {
            get => fields.DetailIsActive[this];
            set => fields.DetailIsActive[this] = value;
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

        [DisplayName("Description Type"), Expression("jDescription.[Type]")]
        public Int32? DescriptionType
        {
            get => fields.DescriptionType[this];
            set => fields.DescriptionType[this] = value;
        }

        [DisplayName("Description"), Expression("jDescription.[Description]")]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Description Code"), Expression("jDescription.[Code]")]
        public String DescriptionCode
        {
            get => fields.DescriptionCode[this];
            set => fields.DescriptionCode[this] = value;
        }

        [DisplayName("Description Insert Date"), Expression("jDescription.[InsertDate]")]
        public DateTime? DescriptionInsertDate
        {
            get => fields.DescriptionInsertDate[this];
            set => fields.DescriptionInsertDate[this] = value;
        }

        [DisplayName("Description Insert User Id"), Expression("jDescription.[InsertUserId]")]
        public Int32? DescriptionInsertUserId
        {
            get => fields.DescriptionInsertUserId[this];
            set => fields.DescriptionInsertUserId[this] = value;
        }

        [DisplayName("Description Update Date"), Expression("jDescription.[UpdateDate]")]
        public DateTime? DescriptionUpdateDate
        {
            get => fields.DescriptionUpdateDate[this];
            set => fields.DescriptionUpdateDate[this] = value;
        }

        [DisplayName("Description Update User Id"), Expression("jDescription.[UpdateUserId]")]
        public Int32? DescriptionUpdateUserId
        {
            get => fields.DescriptionUpdateUserId[this];
            set => fields.DescriptionUpdateUserId[this] = value;
        }

        [DisplayName("Description Is Active"), Expression("jDescription.[IsActive]")]
        public Int16? DescriptionIsActive
        {
            get => fields.DescriptionIsActive[this];
            set => fields.DescriptionIsActive[this] = value;
        }

        public BacteriumRow()
            : base()
        {
        }

        public BacteriumRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field DetailId;
            public Int32Field AssayId;
            public StringField Name;
            public StringField Result;
            public Int32Field DescriptionId;
            public StringField Colony;
            public Int32Field Type;

            public Int32Field DetailSampleId;
            public Int32Field DetailAssayId;
            public Int32Field DetailParentId;
            public StringField DetailResult;
            public DateTimeField DetailResultDate;
            public Int32Field DetailResultUserId;
            public Int32Field DetailDeviceId;
            public DateTimeField DetailDeviceDate;
            public Int32Field DetailDescriptionId;
            public StringField DetailPicture;
            public StringField DetailUnit;
            public DecimalField DetailNLow;
            public DecimalField DetailNHigh;
            public DecimalField DetailPLow;
            public DecimalField DetailPHigh;
            public StringField DetailSpecial;
            public Int32Field DetailImportance;
            public DecimalField DetailPrice;
            public Int32Field DetailInstitutionId;
            public DateTimeField DetailInsertDate;
            public Int32Field DetailInsertUserId;
            public DateTimeField DetailUpdateDate;
            public Int32Field DetailUpdateUserId;
            public Int16Field DetailIsActive;

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

            public Int32Field DescriptionType;
            public StringField Description;
            public StringField DescriptionCode;
            public DateTimeField DescriptionInsertDate;
            public Int32Field DescriptionInsertUserId;
            public DateTimeField DescriptionUpdateDate;
            public Int32Field DescriptionUpdateUserId;
            public Int16Field DescriptionIsActive;
        }
    }
}
