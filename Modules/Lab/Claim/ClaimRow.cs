using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Claim]")]
    [DisplayName("Claim"), InstanceName("Claim")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class ClaimRow : BaseRow<ClaimRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Laboratory"), NotNull, ForeignKey("[dbo].[Laboratory]", "Id"), LeftJoin("jLaboratory"), TextualField("LaboratoryName")]
        public Int32? LaboratoryId
        {
            get => fields.LaboratoryId[this];
            set => fields.LaboratoryId[this] = value;
        }

        [DisplayName("Record Date"), NotNull]
        public DateTime? RecordDate
        {
            get => fields.RecordDate[this];
            set => fields.RecordDate[this] = value;
        }

        [DisplayName("Institution"), NotNull, ForeignKey("[dbo].[Institution]", "Id"), LeftJoin("jInstitution"), TextualField("InstitutionName")]
        public Int32? InstitutionId
        {
            get => fields.InstitutionId[this];
            set => fields.InstitutionId[this] = value;
        }

        [DisplayName("Patient"), NotNull, ForeignKey("[dbo].[Patient]", "Id"), LeftJoin("jPatient"), TextualField("PatientName")]
        public Int32? PatientId
        {
            get => fields.PatientId[this];
            set => fields.PatientId[this] = value;
        }

        [DisplayName("Claim Type"), NotNull]
        public Int16? ClaimType
        {
            get => fields.ClaimType[this];
            set => fields.ClaimType[this] = value;
        }

        [DisplayName("Priorty"), NotNull]
        public Int32? Priorty
        {
            get => fields.Priorty[this];
            set => fields.Priorty[this] = value;
        }

        [DisplayName("Description"), Size(250), QuickSearch, NameProperty]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
        }

        [DisplayName("Invoice"), ForeignKey("[dbo].[Invoice]", "Id"), LeftJoin("jInvoice")]
        public Int32? InvoiceId
        {
            get => fields.InvoiceId[this];
            set => fields.InvoiceId[this] = value;
        }

        [DisplayName("Payment Type")]
        public Int32? PaymentType
        {
            get => fields.PaymentType[this];
            set => fields.PaymentType[this] = value;
        }

        [DisplayName("Payment Status")]
        public Boolean? PaymentStatus
        {
            get => fields.PaymentStatus[this];
            set => fields.PaymentStatus[this] = value;
        }

        [DisplayName("Fee"), Size(19), Scale(5)]
        public Decimal? Fee
        {
            get => fields.Fee[this];
            set => fields.Fee[this] = value;
        }

        [DisplayName("Price"), Size(19), Scale(5)]
        public Decimal? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Laboratory Name"), Expression("jLaboratory.[Name]")]
        public String LaboratoryName
        {
            get => fields.LaboratoryName[this];
            set => fields.LaboratoryName[this] = value;
        }

        [DisplayName("Laboratory Logo"), Expression("jLaboratory.[Logo]")]
        public String LaboratoryLogo
        {
            get => fields.LaboratoryLogo[this];
            set => fields.LaboratoryLogo[this] = value;
        }

        [DisplayName("Laboratory Phone"), Expression("jLaboratory.[Phone]")]
        public String LaboratoryPhone
        {
            get => fields.LaboratoryPhone[this];
            set => fields.LaboratoryPhone[this] = value;
        }

        [DisplayName("Laboratory Fax"), Expression("jLaboratory.[Fax]")]
        public String LaboratoryFax
        {
            get => fields.LaboratoryFax[this];
            set => fields.LaboratoryFax[this] = value;
        }

        [DisplayName("Laboratory E Mail"), Expression("jLaboratory.[EMail]")]
        public String LaboratoryEMail
        {
            get => fields.LaboratoryEMail[this];
            set => fields.LaboratoryEMail[this] = value;
        }

        [DisplayName("Laboratory Address"), Expression("jLaboratory.[Address]")]
        public String LaboratoryAddress
        {
            get => fields.LaboratoryAddress[this];
            set => fields.LaboratoryAddress[this] = value;
        }

        [DisplayName("Laboratory Mernis"), Expression("jLaboratory.[Mernis]")]
        public String LaboratoryMernis
        {
            get => fields.LaboratoryMernis[this];
            set => fields.LaboratoryMernis[this] = value;
        }

        [DisplayName("Laboratory Institution"), Expression("jLaboratory.[Institution]")]
        public String LaboratoryInstitution
        {
            get => fields.LaboratoryInstitution[this];
            set => fields.LaboratoryInstitution[this] = value;
        }

        [DisplayName("Laboratory Srv Melis"), Expression("jLaboratory.[SrvMelis]")]
        public Boolean? LaboratorySrvMelis
        {
            get => fields.LaboratorySrvMelis[this];
            set => fields.LaboratorySrvMelis[this] = value;
        }

        [DisplayName("Laboratory Srv E Nabiz"), Expression("jLaboratory.[SrvENabiz]")]
        public Boolean? LaboratorySrvENabiz
        {
            get => fields.LaboratorySrvENabiz[this];
            set => fields.LaboratorySrvENabiz[this] = value;
        }

        [DisplayName("Laboratory Srv Covid"), Expression("jLaboratory.[SrvCovid]")]
        public Boolean? LaboratorySrvCovid
        {
            get => fields.LaboratorySrvCovid[this];
            set => fields.LaboratorySrvCovid[this] = value;
        }

        [DisplayName("Laboratory Is Payment Mandatory"), Expression("jLaboratory.[IsPaymentMandatory]")]
        public Boolean? LaboratoryIsPaymentMandatory
        {
            get => fields.LaboratoryIsPaymentMandatory[this];
            set => fields.LaboratoryIsPaymentMandatory[this] = value;
        }

        [DisplayName("Laboratory Is Acceptrequired"), Expression("jLaboratory.[IsAcceptrequired]")]
        public Boolean? LaboratoryIsAcceptrequired
        {
            get => fields.LaboratoryIsAcceptrequired[this];
            set => fields.LaboratoryIsAcceptrequired[this] = value;
        }

        [DisplayName("Laboratory Is Do Not Reprint"), Expression("jLaboratory.[IsDoNotReprint]")]
        public Boolean? LaboratoryIsDoNotReprint
        {
            get => fields.LaboratoryIsDoNotReprint[this];
            set => fields.LaboratoryIsDoNotReprint[this] = value;
        }

        [DisplayName("Laboratory Insert Date"), Expression("jLaboratory.[InsertDate]")]
        public DateTime? LaboratoryInsertDate
        {
            get => fields.LaboratoryInsertDate[this];
            set => fields.LaboratoryInsertDate[this] = value;
        }

        [DisplayName("Laboratory Insert User Id"), Expression("jLaboratory.[InsertUserId]")]
        public Int32? LaboratoryInsertUserId
        {
            get => fields.LaboratoryInsertUserId[this];
            set => fields.LaboratoryInsertUserId[this] = value;
        }

        [DisplayName("Laboratory Update Date"), Expression("jLaboratory.[UpdateDate]")]
        public DateTime? LaboratoryUpdateDate
        {
            get => fields.LaboratoryUpdateDate[this];
            set => fields.LaboratoryUpdateDate[this] = value;
        }

        [DisplayName("Laboratory Update User Id"), Expression("jLaboratory.[UpdateUserId]")]
        public Int32? LaboratoryUpdateUserId
        {
            get => fields.LaboratoryUpdateUserId[this];
            set => fields.LaboratoryUpdateUserId[this] = value;
        }

        [DisplayName("Laboratory Is Active"), Expression("jLaboratory.[IsActive]")]
        public Int16? LaboratoryIsActive
        {
            get => fields.LaboratoryIsActive[this];
            set => fields.LaboratoryIsActive[this] = value;
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

        [DisplayName("Patient Name"), Expression("jPatient.[Name]")]
        public String PatientName
        {
            get => fields.PatientName[this];
            set => fields.PatientName[this] = value;
        }

        [DisplayName("Patient Id Number"), Expression("jPatient.[IdNumber]")]
        public String PatientIdNumber
        {
            get => fields.PatientIdNumber[this];
            set => fields.PatientIdNumber[this] = value;
        }

        [DisplayName("Patient Father Name"), Expression("jPatient.[FatherName]")]
        public String PatientFatherName
        {
            get => fields.PatientFatherName[this];
            set => fields.PatientFatherName[this] = value;
        }

        [DisplayName("Patient Mother Name"), Expression("jPatient.[MotherName]")]
        public String PatientMotherName
        {
            get => fields.PatientMotherName[this];
            set => fields.PatientMotherName[this] = value;
        }

        [DisplayName("Patient Birthdate"), Expression("jPatient.[Birthdate]")]
        public DateTime? PatientBirthdate
        {
            get => fields.PatientBirthdate[this];
            set => fields.PatientBirthdate[this] = value;
        }

        [DisplayName("Patient Place"), Expression("jPatient.[Place]")]
        public String PatientPlace
        {
            get => fields.PatientPlace[this];
            set => fields.PatientPlace[this] = value;
        }

        [DisplayName("Patient Blood Group"), Expression("jPatient.[BloodGroup]")]
        public Int32? PatientBloodGroup
        {
            get => fields.PatientBloodGroup[this];
            set => fields.PatientBloodGroup[this] = value;
        }

        [DisplayName("Patient Phone"), Expression("jPatient.[Phone]")]
        public String PatientPhone
        {
            get => fields.PatientPhone[this];
            set => fields.PatientPhone[this] = value;
        }

        [DisplayName("Patient E Mail"), Expression("jPatient.[EMail]")]
        public String PatientEMail
        {
            get => fields.PatientEMail[this];
            set => fields.PatientEMail[this] = value;
        }

        [DisplayName("Patient Address"), Expression("jPatient.[Address]")]
        public String PatientAddress
        {
            get => fields.PatientAddress[this];
            set => fields.PatientAddress[this] = value;
        }

        [DisplayName("Patient Insert Date"), Expression("jPatient.[InsertDate]")]
        public DateTime? PatientInsertDate
        {
            get => fields.PatientInsertDate[this];
            set => fields.PatientInsertDate[this] = value;
        }

        [DisplayName("Patient Insert User Id"), Expression("jPatient.[InsertUserId]")]
        public Int32? PatientInsertUserId
        {
            get => fields.PatientInsertUserId[this];
            set => fields.PatientInsertUserId[this] = value;
        }

        [DisplayName("Patient Update Date"), Expression("jPatient.[UpdateDate]")]
        public DateTime? PatientUpdateDate
        {
            get => fields.PatientUpdateDate[this];
            set => fields.PatientUpdateDate[this] = value;
        }

        [DisplayName("Patient Update User Id"), Expression("jPatient.[UpdateUserId]")]
        public Int32? PatientUpdateUserId
        {
            get => fields.PatientUpdateUserId[this];
            set => fields.PatientUpdateUserId[this] = value;
        }

        [DisplayName("Patient Is Active"), Expression("jPatient.[IsActive]")]
        public Int16? PatientIsActive
        {
            get => fields.PatientIsActive[this];
            set => fields.PatientIsActive[this] = value;
        }

        [DisplayName("Invoice Laboratory Id"), Expression("jInvoice.[LaboratoryId]")]
        public Int32? InvoiceLaboratoryId
        {
            get => fields.InvoiceLaboratoryId[this];
            set => fields.InvoiceLaboratoryId[this] = value;
        }

        [DisplayName("Invoice Institution Id"), Expression("jInvoice.[InstitutionId]")]
        public Int32? InvoiceInstitutionId
        {
            get => fields.InvoiceInstitutionId[this];
            set => fields.InvoiceInstitutionId[this] = value;
        }

        [DisplayName("Invoice Year"), Expression("jInvoice.[Year]")]
        public Int32? InvoiceYear
        {
            get => fields.InvoiceYear[this];
            set => fields.InvoiceYear[this] = value;
        }

        [DisplayName("Invoice Number"), Expression("jInvoice.[Number]")]
        public Int32? InvoiceNumber
        {
            get => fields.InvoiceNumber[this];
            set => fields.InvoiceNumber[this] = value;
        }

        [DisplayName("Invoice Date"), Expression("jInvoice.[Date]")]
        public DateTime? InvoiceDate
        {
            get => fields.InvoiceDate[this];
            set => fields.InvoiceDate[this] = value;
        }

        [DisplayName("Invoice Prite"), Expression("jInvoice.[Prite]")]
        public Decimal? InvoicePrite
        {
            get => fields.InvoicePrite[this];
            set => fields.InvoicePrite[this] = value;
        }

        [DisplayName("Invoice Counts"), Expression("jInvoice.[Counts]")]
        public Int32? InvoiceCounts
        {
            get => fields.InvoiceCounts[this];
            set => fields.InvoiceCounts[this] = value;
        }

        [DisplayName("Invoice Status"), Expression("jInvoice.[Status]")]
        public Int32? InvoiceStatus
        {
            get => fields.InvoiceStatus[this];
            set => fields.InvoiceStatus[this] = value;
        }

        [DisplayName("Invoice Insert Date"), Expression("jInvoice.[InsertDate]")]
        public DateTime? InvoiceInsertDate
        {
            get => fields.InvoiceInsertDate[this];
            set => fields.InvoiceInsertDate[this] = value;
        }

        [DisplayName("Invoice Insert User Id"), Expression("jInvoice.[InsertUserId]")]
        public Int32? InvoiceInsertUserId
        {
            get => fields.InvoiceInsertUserId[this];
            set => fields.InvoiceInsertUserId[this] = value;
        }

        [DisplayName("Invoice Update Date"), Expression("jInvoice.[UpdateDate]")]
        public DateTime? InvoiceUpdateDate
        {
            get => fields.InvoiceUpdateDate[this];
            set => fields.InvoiceUpdateDate[this] = value;
        }

        [DisplayName("Invoice Update User Id"), Expression("jInvoice.[UpdateUserId]")]
        public Int32? InvoiceUpdateUserId
        {
            get => fields.InvoiceUpdateUserId[this];
            set => fields.InvoiceUpdateUserId[this] = value;
        }

        [DisplayName("Invoice Is Active"), Expression("jInvoice.[IsActive]")]
        public Int16? InvoiceIsActive
        {
            get => fields.InvoiceIsActive[this];
            set => fields.InvoiceIsActive[this] = value;
        }

        public ClaimRow()
            : base()
        {
        }

        public ClaimRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field LaboratoryId;
            public DateTimeField RecordDate;
            public Int32Field InstitutionId;
            public Int32Field PatientId;
            public Int16Field ClaimType;
            public Int32Field Priorty;
            public StringField Description;
            public Int32Field InvoiceId;
            public Int32Field PaymentType;
            public BooleanField PaymentStatus;
            public DecimalField Fee;
            public DecimalField Price;

            public StringField LaboratoryName;
            public StringField LaboratoryLogo;
            public StringField LaboratoryPhone;
            public StringField LaboratoryFax;
            public StringField LaboratoryEMail;
            public StringField LaboratoryAddress;
            public StringField LaboratoryMernis;
            public StringField LaboratoryInstitution;
            public BooleanField LaboratorySrvMelis;
            public BooleanField LaboratorySrvENabiz;
            public BooleanField LaboratorySrvCovid;
            public BooleanField LaboratoryIsPaymentMandatory;
            public BooleanField LaboratoryIsAcceptrequired;
            public BooleanField LaboratoryIsDoNotReprint;
            public DateTimeField LaboratoryInsertDate;
            public Int32Field LaboratoryInsertUserId;
            public DateTimeField LaboratoryUpdateDate;
            public Int32Field LaboratoryUpdateUserId;
            public Int16Field LaboratoryIsActive;

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

            public StringField PatientName;
            public StringField PatientIdNumber;
            public StringField PatientFatherName;
            public StringField PatientMotherName;
            public DateTimeField PatientBirthdate;
            public StringField PatientPlace;
            public Int32Field PatientBloodGroup;
            public StringField PatientPhone;
            public StringField PatientEMail;
            public StringField PatientAddress;
            public DateTimeField PatientInsertDate;
            public Int32Field PatientInsertUserId;
            public DateTimeField PatientUpdateDate;
            public Int32Field PatientUpdateUserId;
            public Int16Field PatientIsActive;

            public Int32Field InvoiceLaboratoryId;
            public Int32Field InvoiceInstitutionId;
            public Int32Field InvoiceYear;
            public Int32Field InvoiceNumber;
            public DateTimeField InvoiceDate;
            public DecimalField InvoicePrite;
            public Int32Field InvoiceCounts;
            public Int32Field InvoiceStatus;
            public DateTimeField InvoiceInsertDate;
            public Int32Field InvoiceInsertUserId;
            public DateTimeField InvoiceUpdateDate;
            public Int32Field InvoiceUpdateUserId;
            public Int16Field InvoiceIsActive;
        }
    }
}
