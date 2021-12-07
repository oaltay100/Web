using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Institution]")]
    [DisplayName("Institution"), InstanceName("Institution")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class InstitutionRow : BaseRow<InstitutionRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Industry"), ForeignKey("[dbo].[Industry]", "Id"), LeftJoin("jIndustry"), TextualField("IndustryName")]
        public Int32? IndustryId
        {
            get => fields.IndustryId[this];
            set => fields.IndustryId[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Phone"), Size(15)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Address"), Size(250)]
        public String Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Payment Type"), NotNull]
        public Int32? PaymentType
        {
            get => fields.PaymentType[this];
            set => fields.PaymentType[this] = value;
        }

        [DisplayName("Price"), Size(19), Scale(5)]
        public Decimal? Price
        {
            get => fields.Price[this];
            set => fields.Price[this] = value;
        }

        [DisplayName("Price Type"), NotNull]
        public Int32? PriceType
        {
            get => fields.PriceType[this];
            set => fields.PriceType[this] = value;
        }

        [DisplayName("Is External"), NotNull]
        public Boolean? IsExternal
        {
            get => fields.IsExternal[this];
            set => fields.IsExternal[this] = value;
        }

        [DisplayName("Symbol"), Size(1)]
        public String Symbol
        {
            get => fields.Symbol[this];
            set => fields.Symbol[this] = value;
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

        [DisplayName("Industry Name"), Expression("jIndustry.[Name]")]
        public String IndustryName
        {
            get => fields.IndustryName[this];
            set => fields.IndustryName[this] = value;
        }

        [DisplayName("Industry Phone"), Expression("jIndustry.[Phone]")]
        public String IndustryPhone
        {
            get => fields.IndustryPhone[this];
            set => fields.IndustryPhone[this] = value;
        }

        [DisplayName("Industry Address"), Expression("jIndustry.[Address]")]
        public String IndustryAddress
        {
            get => fields.IndustryAddress[this];
            set => fields.IndustryAddress[this] = value;
        }

        [DisplayName("Industry Insert Date"), Expression("jIndustry.[InsertDate]")]
        public DateTime? IndustryInsertDate
        {
            get => fields.IndustryInsertDate[this];
            set => fields.IndustryInsertDate[this] = value;
        }

        [DisplayName("Industry Insert User Id"), Expression("jIndustry.[InsertUserId]")]
        public Int32? IndustryInsertUserId
        {
            get => fields.IndustryInsertUserId[this];
            set => fields.IndustryInsertUserId[this] = value;
        }

        [DisplayName("Industry Update Date"), Expression("jIndustry.[UpdateDate]")]
        public DateTime? IndustryUpdateDate
        {
            get => fields.IndustryUpdateDate[this];
            set => fields.IndustryUpdateDate[this] = value;
        }

        [DisplayName("Industry Update User Id"), Expression("jIndustry.[UpdateUserId]")]
        public Int32? IndustryUpdateUserId
        {
            get => fields.IndustryUpdateUserId[this];
            set => fields.IndustryUpdateUserId[this] = value;
        }

        [DisplayName("Industry Is Active"), Expression("jIndustry.[IsActive]")]
        public Int16? IndustryIsActive
        {
            get => fields.IndustryIsActive[this];
            set => fields.IndustryIsActive[this] = value;
        }

        public InstitutionRow()
            : base()
        {
        }

        public InstitutionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field LaboratoryId;
            public Int32Field IndustryId;
            public StringField Name;
            public StringField Phone;
            public StringField Address;
            public Int32Field PaymentType;
            public DecimalField Price;
            public Int32Field PriceType;
            public BooleanField IsExternal;
            public StringField Symbol;

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

            public StringField IndustryName;
            public StringField IndustryPhone;
            public StringField IndustryAddress;
            public DateTimeField IndustryInsertDate;
            public Int32Field IndustryInsertUserId;
            public DateTimeField IndustryUpdateDate;
            public Int32Field IndustryUpdateUserId;
            public Int16Field IndustryIsActive;
        }
    }
}
