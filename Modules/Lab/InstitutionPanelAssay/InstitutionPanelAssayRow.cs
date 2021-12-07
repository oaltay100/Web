using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[InstitutionPanelAssay]")]
    [DisplayName("Institution Panel Assay"), InstanceName("Institution Panel Assay")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class InstitutionPanelAssayRow : Row<InstitutionPanelAssayRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Institution Panel"), NotNull, ForeignKey("[dbo].[InstitutionPanel]", "Id"), LeftJoin("jInstitutionPanel"), TextualField("InstitutionPanelName")]
        public Int32? InstitutionPanelId
        {
            get => fields.InstitutionPanelId[this];
            set => fields.InstitutionPanelId[this] = value;
        }

        [DisplayName("Assay"), NotNull, ForeignKey("[dbo].[Assay]", "Id"), LeftJoin("jAssay"), TextualField("AssayUnit")]
        public Int32? AssayId
        {
            get => fields.AssayId[this];
            set => fields.AssayId[this] = value;
        }

        [DisplayName("Price"), Size(19), Scale(5)]
        public Decimal? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Institution Panel Institution Id"), Expression("jInstitutionPanel.[InstitutionId]")]
        public Int32? InstitutionPanelInstitutionId
        {
            get => fields.InstitutionPanelInstitutionId[this];
            set => fields.InstitutionPanelInstitutionId[this] = value;
        }

        [DisplayName("Institution Panel Claim Type"), Expression("jInstitutionPanel.[ClaimType]")]
        public Int32? InstitutionPanelClaimType
        {
            get => fields.InstitutionPanelClaimType[this];
            set => fields.InstitutionPanelClaimType[this] = value;
        }

        [DisplayName("Institution Panel Name"), Expression("jInstitutionPanel.[Name]")]
        public String InstitutionPanelName
        {
            get => fields.InstitutionPanelName[this];
            set => fields.InstitutionPanelName[this] = value;
        }

        [DisplayName("Institution Panel Payment Type"), Expression("jInstitutionPanel.[PaymentType]")]
        public Int32? InstitutionPanelPaymentType
        {
            get => fields.InstitutionPanelPaymentType[this];
            set => fields.InstitutionPanelPaymentType[this] = value;
        }

        [DisplayName("Institution Panel Insert Date"), Expression("jInstitutionPanel.[InsertDate]")]
        public DateTime? InstitutionPanelInsertDate
        {
            get => fields.InstitutionPanelInsertDate[this];
            set => fields.InstitutionPanelInsertDate[this] = value;
        }

        [DisplayName("Institution Panel Insert User Id"), Expression("jInstitutionPanel.[InsertUserId]")]
        public Int32? InstitutionPanelInsertUserId
        {
            get => fields.InstitutionPanelInsertUserId[this];
            set => fields.InstitutionPanelInsertUserId[this] = value;
        }

        [DisplayName("Institution Panel Update Date"), Expression("jInstitutionPanel.[UpdateDate]")]
        public DateTime? InstitutionPanelUpdateDate
        {
            get => fields.InstitutionPanelUpdateDate[this];
            set => fields.InstitutionPanelUpdateDate[this] = value;
        }

        [DisplayName("Institution Panel Update User Id"), Expression("jInstitutionPanel.[UpdateUserId]")]
        public Int32? InstitutionPanelUpdateUserId
        {
            get => fields.InstitutionPanelUpdateUserId[this];
            set => fields.InstitutionPanelUpdateUserId[this] = value;
        }

        [DisplayName("Institution Panel Is Active"), Expression("jInstitutionPanel.[IsActive]")]
        public Int16? InstitutionPanelIsActive
        {
            get => fields.InstitutionPanelIsActive[this];
            set => fields.InstitutionPanelIsActive[this] = value;
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

        public InstitutionPanelAssayRow()
            : base()
        {
        }

        public InstitutionPanelAssayRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InstitutionPanelId;
            public Int32Field AssayId;
            public DecimalField Price;

            public Int32Field InstitutionPanelInstitutionId;
            public Int32Field InstitutionPanelClaimType;
            public StringField InstitutionPanelName;
            public Int32Field InstitutionPanelPaymentType;
            public DateTimeField InstitutionPanelInsertDate;
            public Int32Field InstitutionPanelInsertUserId;
            public DateTimeField InstitutionPanelUpdateDate;
            public Int32Field InstitutionPanelUpdateUserId;
            public Int16Field InstitutionPanelIsActive;

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
