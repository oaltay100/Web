using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Detail]")]
    [DisplayName("Detail"), InstanceName("Detail")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class DetailRow : BaseRow<DetailRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Sample"), NotNull, ForeignKey("[dbo].[Sample]", "Id"), LeftJoin("jSample"), TextualField("SampleRack")]
        public Int32? SampleId
        {
            get => fields.SampleId[this];
            set => fields.SampleId[this] = value;
        }

        [DisplayName("Assay"), NotNull, ForeignKey("[dbo].[Assay]", "Id"), LeftJoin("jAssay"), TextualField("AssayUnit")]
        public Int32? AssayId
        {
            get => fields.AssayId[this];
            set => fields.AssayId[this] = value;
        }

        [DisplayName("Parent"), ForeignKey("[dbo].[Detail]", "Id"), LeftJoin("jParent"), TextualField("ParentResult")]
        public Int32? ParentId
        {
            get => fields.ParentId[this];
            set => fields.ParentId[this] = value;
        }

        [DisplayName("Result"), Size(250), QuickSearch, NameProperty]
        public String Result
        {
            get => fields.Result[this];
            set => fields.Result[this] = value;
        }

        [DisplayName("Result Date")]
        public DateTime? ResultDate
        {
            get => fields.ResultDate[this];
            set => fields.ResultDate[this] = value;
        }

        [DisplayName("Result User Id")]
        public Int32? ResultUserId
        {
            get => fields.ResultUserId[this];
            set => fields.ResultUserId[this] = value;
        }

        [DisplayName("Device Id")]
        public Int32? DeviceId
        {
            get => fields.DeviceId[this];
            set => fields.DeviceId[this] = value;
        }

        [DisplayName("Device Date")]
        public DateTime? DeviceDate
        {
            get => fields.DeviceDate[this];
            set => fields.DeviceDate[this] = value;
        }

        [DisplayName("Description"), ForeignKey("[dbo].[Description]", "Id"), LeftJoin("jDescription"), TextualField("Description")]
        public Int32? DescriptionId
        {
            get => fields.DescriptionId[this];
            set => fields.DescriptionId[this] = value;
        }

        [DisplayName("Picture"), Size(100)]
        public String Picture
        {
            get => fields.Picture[this];
            set => fields.Picture[this] = value;
        }

        [DisplayName("Unit"), Size(50)]
        public String Unit
        {
            get => fields.Unit[this];
            set => fields.Unit[this] = value;
        }

        [DisplayName("N Low"), Size(19), Scale(5)]
        public Decimal? NLow
        {
            get => fields.NLow[this];
            set => fields.NLow[this] = value;
        }

        [DisplayName("N High"), Size(19), Scale(5)]
        public Decimal? NHigh
        {
            get => fields.NHigh[this];
            set => fields.NHigh[this] = value;
        }

        [DisplayName("P Low"), Size(19), Scale(5)]
        public Decimal? PLow
        {
            get => fields.PLow[this];
            set => fields.PLow[this] = value;
        }

        [DisplayName("P High"), Size(19), Scale(5)]
        public Decimal? PHigh
        {
            get => fields.PHigh[this];
            set => fields.PHigh[this] = value;
        }

        [DisplayName("Special"), Size(250)]
        public String Special
        {
            get => fields.Special[this];
            set => fields.Special[this] = value;
        }

        [DisplayName("Importance")]
        public Int32? Importance
        {
            get => fields.Importance[this];
            set => fields.Importance[this] = value;
        }

        [DisplayName("Price"), Size(19), Scale(5)]
        public Decimal? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Institution"), ForeignKey("[dbo].[Institution]", "Id"), LeftJoin("jInstitution"), TextualField("InstitutionName")]
        public Int32? InstitutionId
        {
            get => fields.InstitutionId[this];
            set => fields.InstitutionId[this] = value;
        }

        [DisplayName("Sample Claim Id"), Expression("jSample.[ClaimId]")]
        public Int32? SampleClaimId
        {
            get => fields.SampleClaimId[this];
            set => fields.SampleClaimId[this] = value;
        }

        [DisplayName("Sample Unit Id"), Expression("jSample.[UnitId]")]
        public Int32? SampleUnitId
        {
            get => fields.SampleUnitId[this];
            set => fields.SampleUnitId[this] = value;
        }

        [DisplayName("Sample Barcode"), Expression("jSample.[Barcode]")]
        public Int32? SampleBarcode
        {
            get => fields.SampleBarcode[this];
            set => fields.SampleBarcode[this] = value;
        }

        [DisplayName("Sample Rack"), Expression("jSample.[Rack]")]
        public String SampleRack
        {
            get => fields.SampleRack[this];
            set => fields.SampleRack[this] = value;
        }

        [DisplayName("Sample Insert Date"), Expression("jSample.[InsertDate]")]
        public DateTime? SampleInsertDate
        {
            get => fields.SampleInsertDate[this];
            set => fields.SampleInsertDate[this] = value;
        }

        [DisplayName("Sample Insert User Id"), Expression("jSample.[InsertUserId]")]
        public Int32? SampleInsertUserId
        {
            get => fields.SampleInsertUserId[this];
            set => fields.SampleInsertUserId[this] = value;
        }

        [DisplayName("Sample Update Date"), Expression("jSample.[UpdateDate]")]
        public DateTime? SampleUpdateDate
        {
            get => fields.SampleUpdateDate[this];
            set => fields.SampleUpdateDate[this] = value;
        }

        [DisplayName("Sample Update User Id"), Expression("jSample.[UpdateUserId]")]
        public Int32? SampleUpdateUserId
        {
            get => fields.SampleUpdateUserId[this];
            set => fields.SampleUpdateUserId[this] = value;
        }

        [DisplayName("Sample Is Active"), Expression("jSample.[IsActive]")]
        public Int16? SampleIsActive
        {
            get => fields.SampleIsActive[this];
            set => fields.SampleIsActive[this] = value;
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

        [DisplayName("Parent Sample Id"), Expression("jParent.[SampleId]")]
        public Int32? ParentSampleId
        {
            get => fields.ParentSampleId[this];
            set => fields.ParentSampleId[this] = value;
        }

        [DisplayName("Parent Assay Id"), Expression("jParent.[AssayId]")]
        public Int32? ParentAssayId
        {
            get => fields.ParentAssayId[this];
            set => fields.ParentAssayId[this] = value;
        }

        [DisplayName("Parent Parent Id"), Expression("jParent.[ParentId]")]
        public Int32? ParentParentId
        {
            get => fields.ParentParentId[this];
            set => fields.ParentParentId[this] = value;
        }

        [DisplayName("Parent Result"), Expression("jParent.[Result]")]
        public String ParentResult
        {
            get => fields.ParentResult[this];
            set => fields.ParentResult[this] = value;
        }

        [DisplayName("Parent Result Date"), Expression("jParent.[ResultDate]")]
        public DateTime? ParentResultDate
        {
            get => fields.ParentResultDate[this];
            set => fields.ParentResultDate[this] = value;
        }

        [DisplayName("Parent Result User Id"), Expression("jParent.[ResultUserId]")]
        public Int32? ParentResultUserId
        {
            get => fields.ParentResultUserId[this];
            set => fields.ParentResultUserId[this] = value;
        }

        [DisplayName("Parent Device Id"), Expression("jParent.[DeviceId]")]
        public Int32? ParentDeviceId
        {
            get => fields.ParentDeviceId[this];
            set => fields.ParentDeviceId[this] = value;
        }

        [DisplayName("Parent Device Date"), Expression("jParent.[DeviceDate]")]
        public DateTime? ParentDeviceDate
        {
            get => fields.ParentDeviceDate[this];
            set => fields.ParentDeviceDate[this] = value;
        }

        [DisplayName("Parent Description Id"), Expression("jParent.[DescriptionId]")]
        public Int32? ParentDescriptionId
        {
            get => fields.ParentDescriptionId[this];
            set => fields.ParentDescriptionId[this] = value;
        }

        [DisplayName("Parent Picture"), Expression("jParent.[Picture]")]
        public String ParentPicture
        {
            get => fields.ParentPicture[this];
            set => fields.ParentPicture[this] = value;
        }

        [DisplayName("Parent Unit"), Expression("jParent.[Unit]")]
        public String ParentUnit
        {
            get => fields.ParentUnit[this];
            set => fields.ParentUnit[this] = value;
        }

        [DisplayName("Parent N Low"), Expression("jParent.[NLow]")]
        public Decimal? ParentNLow
        {
            get => fields.ParentNLow[this];
            set => fields.ParentNLow[this] = value;
        }

        [DisplayName("Parent N High"), Expression("jParent.[NHigh]")]
        public Decimal? ParentNHigh
        {
            get => fields.ParentNHigh[this];
            set => fields.ParentNHigh[this] = value;
        }

        [DisplayName("Parent P Low"), Expression("jParent.[PLow]")]
        public Decimal? ParentPLow
        {
            get => fields.ParentPLow[this];
            set => fields.ParentPLow[this] = value;
        }

        [DisplayName("Parent P High"), Expression("jParent.[PHigh]")]
        public Decimal? ParentPHigh
        {
            get => fields.ParentPHigh[this];
            set => fields.ParentPHigh[this] = value;
        }

        [DisplayName("Parent Special"), Expression("jParent.[Special]")]
        public String ParentSpecial
        {
            get => fields.ParentSpecial[this];
            set => fields.ParentSpecial[this] = value;
        }

        [DisplayName("Parent Importance"), Expression("jParent.[Importance]")]
        public Int32? ParentImportance
        {
            get => fields.ParentImportance[this];
            set => fields.ParentImportance[this] = value;
        }

        [DisplayName("Parent Price"), Expression("jParent.[Price]")]
        public Decimal? ParentPrice
        {
            get => fields.ParentPrice[this];
            set => fields.ParentPrice[this] = value;
        }

        [DisplayName("Parent Institution Id"), Expression("jParent.[InstitutionId]")]
        public Int32? ParentInstitutionId
        {
            get => fields.ParentInstitutionId[this];
            set => fields.ParentInstitutionId[this] = value;
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

        [DisplayName("Institution Laboratory Id"), Expression("jInstitution.[LaboratoryId]")]
        public Int32? InstitutionLaboratoryId
        {
            get => fields.InstitutionLaboratoryId[this];
            set => fields.InstitutionLaboratoryId[this] = value;
        }

        [DisplayName("Institution Industry Id"), Expression("jInstitution.[IndustryId]")]
        public Int32? InstitutionIndustryId
        {
            get => fields.InstitutionIndustryId[this];
            set => fields.InstitutionIndustryId[this] = value;
        }

        [DisplayName("Institution Name"), Expression("jInstitution.[Name]")]
        public String InstitutionName
        {
            get => fields.InstitutionName[this];
            set => fields.InstitutionName[this] = value;
        }

        [DisplayName("Institution Phone"), Expression("jInstitution.[Phone]")]
        public String InstitutionPhone
        {
            get => fields.InstitutionPhone[this];
            set => fields.InstitutionPhone[this] = value;
        }

        [DisplayName("Institution Address"), Expression("jInstitution.[Address]")]
        public String InstitutionAddress
        {
            get => fields.InstitutionAddress[this];
            set => fields.InstitutionAddress[this] = value;
        }

        [DisplayName("Institution Payment Type"), Expression("jInstitution.[PaymentType]")]
        public Int32? InstitutionPaymentType
        {
            get => fields.InstitutionPaymentType[this];
            set => fields.InstitutionPaymentType[this] = value;
        }

        [DisplayName("Institution Price"), Expression("jInstitution.[Price]")]
        public Decimal? InstitutionPrice
        {
            get => fields.InstitutionPrice[this];
            set => fields.InstitutionPrice[this] = value;
        }

        [DisplayName("Institution Price Type"), Expression("jInstitution.[PriceType]")]
        public Int32? InstitutionPriceType
        {
            get => fields.InstitutionPriceType[this];
            set => fields.InstitutionPriceType[this] = value;
        }

        [DisplayName("Institution Is External"), Expression("jInstitution.[IsExternal]")]
        public Boolean? InstitutionIsExternal
        {
            get => fields.InstitutionIsExternal[this];
            set => fields.InstitutionIsExternal[this] = value;
        }

        [DisplayName("Institution Symbol"), Expression("jInstitution.[Symbol]")]
        public String InstitutionSymbol
        {
            get => fields.InstitutionSymbol[this];
            set => fields.InstitutionSymbol[this] = value;
        }

        [DisplayName("Institution Insert Date"), Expression("jInstitution.[InsertDate]")]
        public DateTime? InstitutionInsertDate
        {
            get => fields.InstitutionInsertDate[this];
            set => fields.InstitutionInsertDate[this] = value;
        }

        [DisplayName("Institution Insert User Id"), Expression("jInstitution.[InsertUserId]")]
        public Int32? InstitutionInsertUserId
        {
            get => fields.InstitutionInsertUserId[this];
            set => fields.InstitutionInsertUserId[this] = value;
        }

        [DisplayName("Institution Update Date"), Expression("jInstitution.[UpdateDate]")]
        public DateTime? InstitutionUpdateDate
        {
            get => fields.InstitutionUpdateDate[this];
            set => fields.InstitutionUpdateDate[this] = value;
        }

        [DisplayName("Institution Update User Id"), Expression("jInstitution.[UpdateUserId]")]
        public Int32? InstitutionUpdateUserId
        {
            get => fields.InstitutionUpdateUserId[this];
            set => fields.InstitutionUpdateUserId[this] = value;
        }

        [DisplayName("Institution Is Active"), Expression("jInstitution.[IsActive]")]
        public Int16? InstitutionIsActive
        {
            get => fields.InstitutionIsActive[this];
            set => fields.InstitutionIsActive[this] = value;
        }

        public DetailRow()
            : base()
        {
        }

        public DetailRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field SampleId;
            public Int32Field AssayId;
            public Int32Field ParentId;
            public StringField Result;
            public DateTimeField ResultDate;
            public Int32Field ResultUserId;
            public Int32Field DeviceId;
            public DateTimeField DeviceDate;
            public Int32Field DescriptionId;
            public StringField Picture;
            public StringField Unit;
            public DecimalField NLow;
            public DecimalField NHigh;
            public DecimalField PLow;
            public DecimalField PHigh;
            public StringField Special;
            public Int32Field Importance;
            public DecimalField Price;
            public Int32Field InstitutionId;

            public Int32Field SampleClaimId;
            public Int32Field SampleUnitId;
            public Int32Field SampleBarcode;
            public StringField SampleRack;
            public DateTimeField SampleInsertDate;
            public Int32Field SampleInsertUserId;
            public DateTimeField SampleUpdateDate;
            public Int32Field SampleUpdateUserId;
            public Int16Field SampleIsActive;

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

            public Int32Field ParentSampleId;
            public Int32Field ParentAssayId;
            public Int32Field ParentParentId;
            public StringField ParentResult;
            public DateTimeField ParentResultDate;
            public Int32Field ParentResultUserId;
            public Int32Field ParentDeviceId;
            public DateTimeField ParentDeviceDate;
            public Int32Field ParentDescriptionId;
            public StringField ParentPicture;
            public StringField ParentUnit;
            public DecimalField ParentNLow;
            public DecimalField ParentNHigh;
            public DecimalField ParentPLow;
            public DecimalField ParentPHigh;
            public StringField ParentSpecial;
            public Int32Field ParentImportance;
            public DecimalField ParentPrice;
            public Int32Field ParentInstitutionId;
            public DateTimeField ParentInsertDate;
            public Int32Field ParentInsertUserId;
            public DateTimeField ParentUpdateDate;
            public Int32Field ParentUpdateUserId;
            public Int16Field ParentIsActive;

            public Int32Field DescriptionType;
            public StringField Description;
            public StringField DescriptionCode;
            public DateTimeField DescriptionInsertDate;
            public Int32Field DescriptionInsertUserId;
            public DateTimeField DescriptionUpdateDate;
            public Int32Field DescriptionUpdateUserId;
            public Int16Field DescriptionIsActive;

            public Int32Field InstitutionLaboratoryId;
            public Int32Field InstitutionIndustryId;
            public StringField InstitutionName;
            public StringField InstitutionPhone;
            public StringField InstitutionAddress;
            public Int32Field InstitutionPaymentType;
            public DecimalField InstitutionPrice;
            public Int32Field InstitutionPriceType;
            public BooleanField InstitutionIsExternal;
            public StringField InstitutionSymbol;
            public DateTimeField InstitutionInsertDate;
            public Int32Field InstitutionInsertUserId;
            public DateTimeField InstitutionUpdateDate;
            public Int32Field InstitutionUpdateUserId;
            public Int16Field InstitutionIsActive;
        }
    }
}
