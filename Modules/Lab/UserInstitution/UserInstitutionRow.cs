using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[UserInstitution]")]
    [DisplayName("User Institution"), InstanceName("User Institution")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class UserInstitutionRow : Row<UserInstitutionRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUser"), TextualField("UserUsername")]
        public Int32? UserId
        {
            get => fields.UserId[this];
            set => fields.UserId[this] = value;
        }

        [DisplayName("Institution"), NotNull, ForeignKey("[dbo].[Institution]", "Id"), LeftJoin("jInstitution"), TextualField("InstitutionName")]
        public Int32? InstitutionId
        {
            get => fields.InstitutionId[this];
            set => fields.InstitutionId[this] = value;
        }

        [DisplayName("User Username"), Expression("jUser.[Username]")]
        public String UserUsername
        {
            get => fields.UserUsername[this];
            set => fields.UserUsername[this] = value;
        }

        [DisplayName("User Display Name"), Expression("jUser.[DisplayName]")]
        public String UserDisplayName
        {
            get => fields.UserDisplayName[this];
            set => fields.UserDisplayName[this] = value;
        }

        [DisplayName("User Email"), Expression("jUser.[Email]")]
        public String UserEmail
        {
            get => fields.UserEmail[this];
            set => fields.UserEmail[this] = value;
        }

        [DisplayName("User Source"), Expression("jUser.[Source]")]
        public String UserSource
        {
            get => fields.UserSource[this];
            set => fields.UserSource[this] = value;
        }

        [DisplayName("User Last Directory Update"), Expression("jUser.[LastDirectoryUpdate]")]
        public DateTime? UserLastDirectoryUpdate
        {
            get => fields.UserLastDirectoryUpdate[this];
            set => fields.UserLastDirectoryUpdate[this] = value;
        }

        [DisplayName("User User Image"), Expression("jUser.[UserImage]")]
        public String UserUserImage
        {
            get => fields.UserUserImage[this];
            set => fields.UserUserImage[this] = value;
        }

        [DisplayName("User Insert Date"), Expression("jUser.[InsertDate]")]
        public DateTime? UserInsertDate
        {
            get => fields.UserInsertDate[this];
            set => fields.UserInsertDate[this] = value;
        }

        [DisplayName("User Insert User Id"), Expression("jUser.[InsertUserId]")]
        public Int32? UserInsertUserId
        {
            get => fields.UserInsertUserId[this];
            set => fields.UserInsertUserId[this] = value;
        }

        [DisplayName("User Update Date"), Expression("jUser.[UpdateDate]")]
        public DateTime? UserUpdateDate
        {
            get => fields.UserUpdateDate[this];
            set => fields.UserUpdateDate[this] = value;
        }

        [DisplayName("User Update User Id"), Expression("jUser.[UpdateUserId]")]
        public Int32? UserUpdateUserId
        {
            get => fields.UserUpdateUserId[this];
            set => fields.UserUpdateUserId[this] = value;
        }

        [DisplayName("User Is Active"), Expression("jUser.[IsActive]")]
        public Int16? UserIsActive
        {
            get => fields.UserIsActive[this];
            set => fields.UserIsActive[this] = value;
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

        public UserInstitutionRow()
            : base()
        {
        }

        public UserInstitutionRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public Int32Field InstitutionId;

            public StringField UserUsername;
            public StringField UserDisplayName;
            public StringField UserEmail;
            public StringField UserSource;
            public DateTimeField UserLastDirectoryUpdate;
            public StringField UserUserImage;
            public DateTimeField UserInsertDate;
            public Int32Field UserInsertUserId;
            public DateTimeField UserUpdateDate;
            public Int32Field UserUpdateUserId;
            public Int16Field UserIsActive;

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
