using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Image]")]
    [DisplayName("Image"), InstanceName("Image")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class ImageRow : BaseRow<ImageRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Detail"), NotNull, ForeignKey("[dbo].[Detail]", "Id"), LeftJoin("jDetail"), TextualField("DetailResult")]
        public Int32? DetailId
        {
            get => fields.DetailId[this];
            set => fields.DetailId[this] = value;
        }

        [DisplayName("Path"), Size(250), NotNull, QuickSearch, NameProperty]
        public String Path
        {
            get => fields.Path[this];
            set => fields.Path[this] = value;
        }

        [DisplayName("Study Uid"), Size(100)]
        public String StudyUid
        {
            get => fields.StudyUid[this];
            set => fields.StudyUid[this] = value;
        }

        [DisplayName("Seri Uid"), Size(100)]
        public String SeriUid
        {
            get => fields.SeriUid[this];
            set => fields.SeriUid[this] = value;
        }

        [DisplayName("Image Uid"), Size(100)]
        public String ImageUid
        {
            get => fields.ImageUid[this];
            set => fields.ImageUid[this] = value;
        }

        [DisplayName("Detail Sample Id"), Expression("jDetail.[SampleId]")]
        public Int32? DetailSampleId
        {
            get => fields.DetailSampleId[this];
            set => fields.DetailSampleId[this] = value;
        }

        [DisplayName("Detail Assay Id"), Expression("jDetail.[AssayId]")]
        public Int32? DetailAssayId
        {
            get => fields.DetailAssayId[this];
            set => fields.DetailAssayId[this] = value;
        }

        [DisplayName("Detail Parent Id"), Expression("jDetail.[ParentId]")]
        public Int32? DetailParentId
        {
            get => fields.DetailParentId[this];
            set => fields.DetailParentId[this] = value;
        }

        [DisplayName("Detail Result"), Expression("jDetail.[Result]")]
        public String DetailResult
        {
            get => fields.DetailResult[this];
            set => fields.DetailResult[this] = value;
        }

        [DisplayName("Detail Result Date"), Expression("jDetail.[ResultDate]")]
        public DateTime? DetailResultDate
        {
            get => fields.DetailResultDate[this];
            set => fields.DetailResultDate[this] = value;
        }

        [DisplayName("Detail Result User Id"), Expression("jDetail.[ResultUserId]")]
        public Int32? DetailResultUserId
        {
            get => fields.DetailResultUserId[this];
            set => fields.DetailResultUserId[this] = value;
        }

        [DisplayName("Detail Device Id"), Expression("jDetail.[DeviceId]")]
        public Int32? DetailDeviceId
        {
            get => fields.DetailDeviceId[this];
            set => fields.DetailDeviceId[this] = value;
        }

        [DisplayName("Detail Device Date"), Expression("jDetail.[DeviceDate]")]
        public DateTime? DetailDeviceDate
        {
            get => fields.DetailDeviceDate[this];
            set => fields.DetailDeviceDate[this] = value;
        }

        [DisplayName("Detail Description Id"), Expression("jDetail.[DescriptionId]")]
        public Int32? DetailDescriptionId
        {
            get => fields.DetailDescriptionId[this];
            set => fields.DetailDescriptionId[this] = value;
        }

        [DisplayName("Detail Picture"), Expression("jDetail.[Picture]")]
        public String DetailPicture
        {
            get => fields.DetailPicture[this];
            set => fields.DetailPicture[this] = value;
        }

        [DisplayName("Detail Unit"), Expression("jDetail.[Unit]")]
        public String DetailUnit
        {
            get => fields.DetailUnit[this];
            set => fields.DetailUnit[this] = value;
        }

        [DisplayName("Detail N Low"), Expression("jDetail.[NLow]")]
        public Decimal? DetailNLow
        {
            get => fields.DetailNLow[this];
            set => fields.DetailNLow[this] = value;
        }

        [DisplayName("Detail N High"), Expression("jDetail.[NHigh]")]
        public Decimal? DetailNHigh
        {
            get => fields.DetailNHigh[this];
            set => fields.DetailNHigh[this] = value;
        }

        [DisplayName("Detail P Low"), Expression("jDetail.[PLow]")]
        public Decimal? DetailPLow
        {
            get => fields.DetailPLow[this];
            set => fields.DetailPLow[this] = value;
        }

        [DisplayName("Detail P High"), Expression("jDetail.[PHigh]")]
        public Decimal? DetailPHigh
        {
            get => fields.DetailPHigh[this];
            set => fields.DetailPHigh[this] = value;
        }

        [DisplayName("Detail Special"), Expression("jDetail.[Special]")]
        public String DetailSpecial
        {
            get => fields.DetailSpecial[this];
            set => fields.DetailSpecial[this] = value;
        }

        [DisplayName("Detail Importance"), Expression("jDetail.[Importance]")]
        public Int32? DetailImportance
        {
            get => fields.DetailImportance[this];
            set => fields.DetailImportance[this] = value;
        }

        [DisplayName("Detail Price"), Expression("jDetail.[Price]")]
        public Decimal? DetailPrice
        {
            get => fields.DetailPrice[this];
            set => fields.DetailPrice[this] = value;
        }

        [DisplayName("Detail Institution Id"), Expression("jDetail.[InstitutionId]")]
        public Int32? DetailInstitutionId
        {
            get => fields.DetailInstitutionId[this];
            set => fields.DetailInstitutionId[this] = value;
        }

        [DisplayName("Detail Insert Date"), Expression("jDetail.[InsertDate]")]
        public DateTime? DetailInsertDate
        {
            get => fields.DetailInsertDate[this];
            set => fields.DetailInsertDate[this] = value;
        }

        [DisplayName("Detail Insert User Id"), Expression("jDetail.[InsertUserId]")]
        public Int32? DetailInsertUserId
        {
            get => fields.DetailInsertUserId[this];
            set => fields.DetailInsertUserId[this] = value;
        }

        [DisplayName("Detail Update Date"), Expression("jDetail.[UpdateDate]")]
        public DateTime? DetailUpdateDate
        {
            get => fields.DetailUpdateDate[this];
            set => fields.DetailUpdateDate[this] = value;
        }

        [DisplayName("Detail Update User Id"), Expression("jDetail.[UpdateUserId]")]
        public Int32? DetailUpdateUserId
        {
            get => fields.DetailUpdateUserId[this];
            set => fields.DetailUpdateUserId[this] = value;
        }

        [DisplayName("Detail Is Active"), Expression("jDetail.[IsActive]")]
        public Int16? DetailIsActive
        {
            get => fields.DetailIsActive[this];
            set => fields.DetailIsActive[this] = value;
        }

        public ImageRow()
            : base()
        {
        }

        public ImageRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field DetailId;
            public StringField Path;
            public StringField StudyUid;
            public StringField SeriUid;
            public StringField ImageUid;

            public Int32Field DetailSampleId;
            public Int32Field DetailAssayId;
            public Int32Field DetailParentId;
            public StringField DetailResult;
            public DateTimeField DetailResultDate;
            public Int32Field DetailResultUserId;
            public Int32Field DetailDeviceId;
            public DateTimeField DetailDeviceDate;
            public Int32Field DetailDescriptionId;
            public StringField DetailPicture;
            public StringField DetailUnit;
            public DecimalField DetailNLow;
            public DecimalField DetailNHigh;
            public DecimalField DetailPLow;
            public DecimalField DetailPHigh;
            public StringField DetailSpecial;
            public Int32Field DetailImportance;
            public DecimalField DetailPrice;
            public Int32Field DetailInstitutionId;
            public DateTimeField DetailInsertDate;
            public Int32Field DetailInsertUserId;
            public DateTimeField DetailUpdateDate;
            public Int32Field DetailUpdateUserId;
            public Int16Field DetailIsActive;
        }
    }
}
