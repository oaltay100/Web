using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Invoice]")]
    [DisplayName("Invoice"), InstanceName("Invoice")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class InvoiceRow : BaseRow<InvoiceRow.RowFields>, IIdRow
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

        [DisplayName("Institution"), NotNull, ForeignKey("[dbo].[Institution]", "Id"), LeftJoin("jInstitution"), TextualField("InstitutionName")]
        public Int32? InstitutionId
        {
            get => fields.InstitutionId[this];
            set => fields.InstitutionId[this] = value;
        }

        [DisplayName("Year"), NotNull]
        public Int32? Year
        {
            get => fields.Year[this];
            set => fields.Year[this] = value;
        }

        [DisplayName("Number"), NotNull]
        public Int32? Number
        {
            get => fields.Number[this];
            set => fields.Number[this] = value;
        }

        [DisplayName("Date"), NotNull]
        public DateTime? Date
        {
            get => fields.Date[this];
            set => fields.Date[this] = value;
        }

        [DisplayName("Prite"), Size(19), Scale(5)]
        public Decimal? Prite
        {
            get => fields.Prite[this];
            set => fields.Prite[this] = value;
        }

        [DisplayName("Counts")]
        public Int32? Counts
        {
            get => fields.Counts[this];
            set => fields.Counts[this] = value;
        }

        [DisplayName("Status")]
        public Int32? Status
        {
            get => fields.Status[this];
            set => fields.Status[this] = value;
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

        public InvoiceRow()
            : base()
        {
        }

        public InvoiceRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field LaboratoryId;
            public Int32Field InstitutionId;
            public Int32Field Year;
            public Int32Field Number;
            public DateTimeField Date;
            public DecimalField Prite;
            public Int32Field Counts;
            public Int32Field Status;

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
        }
    }
}
