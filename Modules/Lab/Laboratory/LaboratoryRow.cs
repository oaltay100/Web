using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Laboratory]")]
    [DisplayName("Laboratory"), InstanceName("Laboratory")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class LaboratoryRow : BaseRow<LaboratoryRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Logo"), Size(100)]
        public String Logo
        {
            get => fields.Logo[this];
            set => fields.Logo[this] = value;
        }

        [DisplayName("Phone"), Size(15)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
        }

        [DisplayName("Fax"), Size(15)]
        public String Fax
        {
            get => fields.Fax[this];
            set => fields.Fax[this] = value;
        }

        [DisplayName("E Mail"), Size(50)]
        public String EMail
        {
            get => fields.EMail[this];
            set => fields.EMail[this] = value;
        }

        [DisplayName("Address"), Size(250)]
        public String Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Mernis"), Size(100)]
        public String Mernis
        {
            get => fields.Mernis[this];
            set => fields.Mernis[this] = value;
        }

        [DisplayName("Institution"), Size(100)]
        public String Institution
        {
            get => fields.Institution[this];
            set => fields.Institution[this] = value;
        }

        [DisplayName("Srv Melis"), NotNull]
        public Boolean? SrvMelis
        {
            get => fields.SrvMelis[this];
            set => fields.SrvMelis[this] = value;
        }

        [DisplayName("Srv E Nabiz"), NotNull]
        public Boolean? SrvENabiz
        {
            get => fields.SrvENabiz[this];
            set => fields.SrvENabiz[this] = value;
        }

        [DisplayName("Srv Covid"), NotNull]
        public Boolean? SrvCovid
        {
            get => fields.SrvCovid[this];
            set => fields.SrvCovid[this] = value;
        }

        [DisplayName("Is Payment Mandatory"), NotNull]
        public Boolean? IsPaymentMandatory
        {
            get => fields.IsPaymentMandatory[this];
            set => fields.IsPaymentMandatory[this] = value;
        }

        [DisplayName("Is Acceptrequired"), NotNull]
        public Boolean? IsAcceptrequired
        {
            get => fields.IsAcceptrequired[this];
            set => fields.IsAcceptrequired[this] = value;
        }

        [DisplayName("Is Do Not Reprint"), NotNull]
        public Boolean? IsDoNotReprint
        {
            get => fields.IsDoNotReprint[this];
            set => fields.IsDoNotReprint[this] = value;
        }

        public LaboratoryRow()
            : base()
        {
        }

        public LaboratoryRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField Logo;
            public StringField Phone;
            public StringField Fax;
            public StringField EMail;
            public StringField Address;
            public StringField Mernis;
            public StringField Institution;
            public BooleanField SrvMelis;
            public BooleanField SrvENabiz;
            public BooleanField SrvCovid;
            public BooleanField IsPaymentMandatory;
            public BooleanField IsAcceptrequired;
            public BooleanField IsDoNotReprint;
        }
    }
}
