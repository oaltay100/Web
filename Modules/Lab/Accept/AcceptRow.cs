using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Accept]")]
    [DisplayName("Accept"), InstanceName("Accept")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class AcceptRow : Row<AcceptRow.RowFields>, IIdRow
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

        [DisplayName("Accept"), NotNull]
        public Int32? Accept
        {
            get => fields.Accept[this];
            set => fields.Accept[this] = value;
        }

        [DisplayName("Accept Date"), NotNull]
        public DateTime? AcceptDate
        {
            get => fields.AcceptDate[this];
            set => fields.AcceptDate[this] = value;
        }

        [DisplayName("Accept User"), NotNull, ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jAcceptUser"), TextualField("AcceptUserUsername")]
        public Int32? AcceptUserId
        {
            get => fields.AcceptUserId[this];
            set => fields.AcceptUserId[this] = value;
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

        [DisplayName("Accept User Username"), Expression("jAcceptUser.[Username]")]
        public String AcceptUserUsername
        {
            get => fields.AcceptUserUsername[this];
            set => fields.AcceptUserUsername[this] = value;
        }

        [DisplayName("Accept User Display Name"), Expression("jAcceptUser.[DisplayName]")]
        public String AcceptUserDisplayName
        {
            get => fields.AcceptUserDisplayName[this];
            set => fields.AcceptUserDisplayName[this] = value;
        }

        [DisplayName("Accept User Email"), Expression("jAcceptUser.[Email]")]
        public String AcceptUserEmail
        {
            get => fields.AcceptUserEmail[this];
            set => fields.AcceptUserEmail[this] = value;
        }

        [DisplayName("Accept User Source"), Expression("jAcceptUser.[Source]")]
        public String AcceptUserSource
        {
            get => fields.AcceptUserSource[this];
            set => fields.AcceptUserSource[this] = value;
        }

        [DisplayName("Accept User Last Directory Update"), Expression("jAcceptUser.[LastDirectoryUpdate]")]
        public DateTime? AcceptUserLastDirectoryUpdate
        {
            get => fields.AcceptUserLastDirectoryUpdate[this];
            set => fields.AcceptUserLastDirectoryUpdate[this] = value;
        }

        [DisplayName("Accept User User Image"), Expression("jAcceptUser.[UserImage]")]
        public String AcceptUserUserImage
        {
            get => fields.AcceptUserUserImage[this];
            set => fields.AcceptUserUserImage[this] = value;
        }

        [DisplayName("Accept User Insert Date"), Expression("jAcceptUser.[InsertDate]")]
        public DateTime? AcceptUserInsertDate
        {
            get => fields.AcceptUserInsertDate[this];
            set => fields.AcceptUserInsertDate[this] = value;
        }

        [DisplayName("Accept User Insert User Id"), Expression("jAcceptUser.[InsertUserId]")]
        public Int32? AcceptUserInsertUserId
        {
            get => fields.AcceptUserInsertUserId[this];
            set => fields.AcceptUserInsertUserId[this] = value;
        }

        [DisplayName("Accept User Update Date"), Expression("jAcceptUser.[UpdateDate]")]
        public DateTime? AcceptUserUpdateDate
        {
            get => fields.AcceptUserUpdateDate[this];
            set => fields.AcceptUserUpdateDate[this] = value;
        }

        [DisplayName("Accept User Update User Id"), Expression("jAcceptUser.[UpdateUserId]")]
        public Int32? AcceptUserUpdateUserId
        {
            get => fields.AcceptUserUpdateUserId[this];
            set => fields.AcceptUserUpdateUserId[this] = value;
        }

        [DisplayName("Accept User Is Active"), Expression("jAcceptUser.[IsActive]")]
        public Int16? AcceptUserIsActive
        {
            get => fields.AcceptUserIsActive[this];
            set => fields.AcceptUserIsActive[this] = value;
        }

        public AcceptRow()
            : base()
        {
        }

        public AcceptRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field SampleId;
            public Int32Field Accept;
            public DateTimeField AcceptDate;
            public Int32Field AcceptUserId;

            public Int32Field SampleClaimId;
            public Int32Field SampleUnitId;
            public Int32Field SampleBarcode;
            public StringField SampleRack;
            public DateTimeField SampleInsertDate;
            public Int32Field SampleInsertUserId;
            public DateTimeField SampleUpdateDate;
            public Int32Field SampleUpdateUserId;
            public Int16Field SampleIsActive;

            public StringField AcceptUserUsername;
            public StringField AcceptUserDisplayName;
            public StringField AcceptUserEmail;
            public StringField AcceptUserSource;
            public DateTimeField AcceptUserLastDirectoryUpdate;
            public StringField AcceptUserUserImage;
            public DateTimeField AcceptUserInsertDate;
            public Int32Field AcceptUserInsertUserId;
            public DateTimeField AcceptUserUpdateDate;
            public Int32Field AcceptUserUpdateUserId;
            public Int16Field AcceptUserIsActive;
        }
    }
}
