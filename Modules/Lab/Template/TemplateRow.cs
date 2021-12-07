using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Template]")]
    [DisplayName("Template"), InstanceName("Template")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class TemplateRow : BaseRow<TemplateRow.RowFields>, IIdRow, INameRow
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

        [DisplayName("Type"), NotNull]
        public Int32? Type
        {
            get => fields.Type[this];
            set => fields.Type[this] = value;
        }

        [DisplayName("Bg Color"), Column("BGColor"), Size(10), NotNull, QuickSearch, NameProperty]
        public String BgColor
        {
            get => fields.BgColor[this];
            set => fields.BgColor[this] = value;
        }

        [DisplayName("Color"), Size(10), NotNull]
        public String Color
        {
            get => fields.Color[this];
            set => fields.Color[this] = value;
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

        public TemplateRow()
            : base()
        {
        }

        public TemplateRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field LaboratoryId;
            public Int32Field Type;
            public StringField BgColor;
            public StringField Color;

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
        }
    }
}
