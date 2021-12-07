using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[InstitutionDoctor]")]
    [DisplayName("Institution Doctor"), InstanceName("Institution Doctor")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class InstitutionDoctorRow : Row<InstitutionDoctorRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Institution"), NotNull, ForeignKey("[dbo].[Institution]", "Id"), LeftJoin("jInstitution"), TextualField("InstitutionName")]
        public Int32? InstitutionId
        {
            get => fields.InstitutionId[this];
            set => fields.InstitutionId[this] = value;
        }

        [DisplayName("Doctor"), NotNull, ForeignKey("[dbo].[Doctor]", "Id"), LeftJoin("jDoctor"), TextualField("DoctorName")]
        public Int32? DoctorId
        {
            get => fields.DoctorId[this];
            set => fields.DoctorId[this] = value;
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

        [DisplayName("Doctor Laboratory Id"), Expression("jDoctor.[LaboratoryId]")]
        public Int32? DoctorLaboratoryId
        {
            get => fields.DoctorLaboratoryId[this];
            set => fields.DoctorLaboratoryId[this] = value;
        }

        [DisplayName("Doctor Name"), Expression("jDoctor.[Name]")]
        public String DoctorName
        {
            get => fields.DoctorName[this];
            set => fields.DoctorName[this] = value;
        }

        [DisplayName("Doctor Id Number"), Expression("jDoctor.[IdNumber]")]
        public String DoctorIdNumber
        {
            get => fields.DoctorIdNumber[this];
            set => fields.DoctorIdNumber[this] = value;
        }

        [DisplayName("Doctor Registration Number"), Expression("jDoctor.[RegistrationNumber]")]
        public String DoctorRegistrationNumber
        {
            get => fields.DoctorRegistrationNumber[this];
            set => fields.DoctorRegistrationNumber[this] = value;
        }

        [DisplayName("Doctor Gender"), Expression("jDoctor.[Gender]")]
        public Int32? DoctorGender
        {
            get => fields.DoctorGender[this];
            set => fields.DoctorGender[this] = value;
        }

        [DisplayName("Doctor Phone"), Expression("jDoctor.[Phone]")]
        public String DoctorPhone
        {
            get => fields.DoctorPhone[this];
            set => fields.DoctorPhone[this] = value;
        }

        [DisplayName("Doctor E Mail"), Expression("jDoctor.[EMail]")]
        public String DoctorEMail
        {
            get => fields.DoctorEMail[this];
            set => fields.DoctorEMail[this] = value;
        }

        [DisplayName("Doctor Address"), Expression("jDoctor.[Address]")]
        public String DoctorAddress
        {
            get => fields.DoctorAddress[this];
            set => fields.DoctorAddress[this] = value;
        }

        [DisplayName("Doctor Task"), Expression("jDoctor.[Task]")]
        public Int32? DoctorTask
        {
            get => fields.DoctorTask[this];
            set => fields.DoctorTask[this] = value;
        }

        [DisplayName("Doctor Appellation"), Expression("jDoctor.[Appellation]")]
        public Int32? DoctorAppellation
        {
            get => fields.DoctorAppellation[this];
            set => fields.DoctorAppellation[this] = value;
        }

        [DisplayName("Doctor Insert Date"), Expression("jDoctor.[InsertDate]")]
        public DateTime? DoctorInsertDate
        {
            get => fields.DoctorInsertDate[this];
            set => fields.DoctorInsertDate[this] = value;
        }

        [DisplayName("Doctor Insert User Id"), Expression("jDoctor.[InsertUserId]")]
        public Int32? DoctorInsertUserId
        {
            get => fields.DoctorInsertUserId[this];
            set => fields.DoctorInsertUserId[this] = value;
        }

        [DisplayName("Doctor Update Date"), Expression("jDoctor.[UpdateDate]")]
        public DateTime? DoctorUpdateDate
        {
            get => fields.DoctorUpdateDate[this];
            set => fields.DoctorUpdateDate[this] = value;
        }

        [DisplayName("Doctor Update User Id"), Expression("jDoctor.[UpdateUserId]")]
        public Int32? DoctorUpdateUserId
        {
            get => fields.DoctorUpdateUserId[this];
            set => fields.DoctorUpdateUserId[this] = value;
        }

        [DisplayName("Doctor Is Active"), Expression("jDoctor.[IsActive]")]
        public Int16? DoctorIsActive
        {
            get => fields.DoctorIsActive[this];
            set => fields.DoctorIsActive[this] = value;
        }

        public InstitutionDoctorRow()
            : base()
        {
        }

        public InstitutionDoctorRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field InstitutionId;
            public Int32Field DoctorId;

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

            public Int32Field DoctorLaboratoryId;
            public StringField DoctorName;
            public StringField DoctorIdNumber;
            public StringField DoctorRegistrationNumber;
            public Int32Field DoctorGender;
            public StringField DoctorPhone;
            public StringField DoctorEMail;
            public StringField DoctorAddress;
            public Int32Field DoctorTask;
            public Int32Field DoctorAppellation;
            public DateTimeField DoctorInsertDate;
            public Int32Field DoctorInsertUserId;
            public DateTimeField DoctorUpdateDate;
            public Int32Field DoctorUpdateUserId;
            public Int16Field DoctorIsActive;
        }
    }
}
