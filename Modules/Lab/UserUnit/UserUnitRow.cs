using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[UserUnit]")]
    [DisplayName("User Unit"), InstanceName("User Unit")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class UserUnitRow : Row<UserUnitRow.RowFields>, IIdRow
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

        [DisplayName("Unit"), NotNull, ForeignKey("[dbo].[Unit]", "Id"), LeftJoin("jUnit"), TextualField("UnitName")]
        public Int32? UnitId
        {
            get => fields.UnitId[this];
            set => fields.UnitId[this] = value;
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

        public UserUnitRow()
            : base()
        {
        }

        public UserUnitRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field UserId;
            public Int32Field UnitId;

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
