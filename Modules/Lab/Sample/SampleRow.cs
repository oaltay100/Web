using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Sample]")]
    [DisplayName("Sample"), InstanceName("Sample")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class SampleRow : BaseRow<SampleRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Claim"), NotNull, ForeignKey("[dbo].[Claim]", "Id"), LeftJoin("jClaim"), TextualField("ClaimDescription")]
        public Int32? ClaimId
        {
            get => fields.ClaimId[this];
            set => fields.ClaimId[this] = value;
        }

        [DisplayName("Unit"), NotNull, ForeignKey("[dbo].[Unit]", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]
        public Int32? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
        }

        [DisplayName("Barcode")]
        public Int32? Barcode
        {
            get => fields.Barcode[this];
            set => fields.Barcode[this] = value;
        }

        [DisplayName("Rack"), Size(20), QuickSearch, NameProperty]
        public String Rack
        {
            get => fields.Rack[this];
            set => fields.Rack[this] = value;
        }

        [DisplayName("Claim Laboratory Id"), Expression("jClaim.[LaboratoryId]")]
        public Int32? ClaimLaboratoryId
        {
            get => fields.ClaimLaboratoryId[this];
            set => fields.ClaimLaboratoryId[this] = value;
        }

        [DisplayName("Claim Record Date"), Expression("jClaim.[RecordDate]")]
        public DateTime? ClaimRecordDate
        {
            get => fields.ClaimRecordDate[this];
            set => fields.ClaimRecordDate[this] = value;
        }

        [DisplayName("Claim Institution Id"), Expression("jClaim.[InstitutionId]")]
        public Int32? ClaimInstitutionId
        {
            get => fields.ClaimInstitutionId[this];
            set => fields.ClaimInstitutionId[this] = value;
        }

        [DisplayName("Claim Patient Id"), Expression("jClaim.[PatientId]")]
        public Int32? ClaimPatientId
        {
            get => fields.ClaimPatientId[this];
            set => fields.ClaimPatientId[this] = value;
        }

        [DisplayName("Claim Claim Type"), Expression("jClaim.[ClaimType]")]
        public Int16? ClaimClaimType
        {
            get => fields.ClaimClaimType[this];
            set => fields.ClaimClaimType[this] = value;
        }

        [DisplayName("Claim Priorty"), Expression("jClaim.[Priorty]")]
        public Int32? ClaimPriorty
        {
            get => fields.ClaimPriorty[this];
            set => fields.ClaimPriorty[this] = value;
        }

        [DisplayName("Claim Description"), Expression("jClaim.[Description]")]
        public String ClaimDescription
        {
            get => fields.ClaimDescription[this];
            set => fields.ClaimDescription[this] = value;
        }

        [DisplayName("Claim Invoice Id"), Expression("jClaim.[InvoiceId]")]
        public Int32? ClaimInvoiceId
        {
            get => fields.ClaimInvoiceId[this];
            set => fields.ClaimInvoiceId[this] = value;
        }

        [DisplayName("Claim Payment Type"), Expression("jClaim.[PaymentType]")]
        public Int32? ClaimPaymentType
        {
            get => fields.ClaimPaymentType[this];
            set => fields.ClaimPaymentType[this] = value;
        }

        [DisplayName("Claim Payment Status"), Expression("jClaim.[PaymentStatus]")]
        public Boolean? ClaimPaymentStatus
        {
            get => fields.ClaimPaymentStatus[this];
            set => fields.ClaimPaymentStatus[this] = value;
        }

        [DisplayName("Claim Fee"), Expression("jClaim.[Fee]")]
        public Decimal? ClaimFee
        {
            get => fields.ClaimFee[this];
            set => fields.ClaimFee[this] = value;
        }

        [DisplayName("Claim Price"), Expression("jClaim.[Price]")]
        public Decimal? ClaimPrice
        {
            get => fields.ClaimPrice[this];
            set => fields.ClaimPrice[this] = value;
        }

        [DisplayName("Claim Insert Date"), Expression("jClaim.[InsertDate]")]
        public DateTime? ClaimInsertDate
        {
            get => fields.ClaimInsertDate[this];
            set => fields.ClaimInsertDate[this] = value;
        }

        [DisplayName("Claim Insert User Id"), Expression("jClaim.[InsertUserId]")]
        public Int32? ClaimInsertUserId
        {
            get => fields.ClaimInsertUserId[this];
            set => fields.ClaimInsertUserId[this] = value;
        }

        [DisplayName("Claim Update Date"), Expression("jClaim.[UpdateDate]")]
        public DateTime? ClaimUpdateDate
        {
            get => fields.ClaimUpdateDate[this];
            set => fields.ClaimUpdateDate[this] = value;
        }

        [DisplayName("Claim Update User Id"), Expression("jClaim.[UpdateUserId]")]
        public Int32? ClaimUpdateUserId
        {
            get => fields.ClaimUpdateUserId[this];
            set => fields.ClaimUpdateUserId[this] = value;
        }

        [DisplayName("Claim Is Active"), Expression("jClaim.[IsActive]")]
        public Int16? ClaimIsActive
        {
            get => fields.ClaimIsActive[this];
            set => fields.ClaimIsActive[this] = value;
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

        public SampleRow()
            : base()
        {
        }

        public SampleRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field ClaimId;
            public Int32Field UnitId;
            public Int32Field Barcode;
            public StringField Rack;

            public Int32Field ClaimLaboratoryId;
            public DateTimeField ClaimRecordDate;
            public Int32Field ClaimInstitutionId;
            public Int32Field ClaimPatientId;
            public Int16Field ClaimClaimType;
            public Int32Field ClaimPriorty;
            public StringField ClaimDescription;
            public Int32Field ClaimInvoiceId;
            public Int32Field ClaimPaymentType;
            public BooleanField ClaimPaymentStatus;
            public DecimalField ClaimFee;
            public DecimalField ClaimPrice;
            public DateTimeField ClaimInsertDate;
            public Int32Field ClaimInsertUserId;
            public DateTimeField ClaimUpdateDate;
            public Int32Field ClaimUpdateUserId;
            public Int16Field ClaimIsActive;

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
