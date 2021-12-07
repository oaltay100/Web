using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Patient]")]
    [DisplayName("Patient"), InstanceName("Patient")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class PatientRow : BaseRow<PatientRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Id Number"), Size(20)]
        public String IdNumber
        {
            get => fields.IdNumber[this];
            set => fields.IdNumber[this] = value;
        }

        [DisplayName("Father Name"), Size(50)]
        public String FatherName
        {
            get => fields.FatherName[this];
            set => fields.FatherName[this] = value;
        }

        [DisplayName("Mother Name"), Size(50)]
        public String MotherName
        {
            get => fields.MotherName[this];
            set => fields.MotherName[this] = value;
        }

        [DisplayName("Birthdate")]
        public DateTime? Birthdate
        {
            get => fields.Birthdate[this];
            set => fields.Birthdate[this] = value;
        }

        [DisplayName("Place"), Size(50)]
        public String Place
        {
            get => fields.Place[this];
            set => fields.Place[this] = value;
        }

        [DisplayName("Blood Group")]
        public Int32? BloodGroup
        {
            get => fields.BloodGroup[this];
            set => fields.BloodGroup[this] = value;
        }

        [DisplayName("Phone"), Size(15)]
        public String Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
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

        public PatientRow()
            : base()
        {
        }

        public PatientRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public StringField Name;
            public StringField IdNumber;
            public StringField FatherName;
            public StringField MotherName;
            public DateTimeField Birthdate;
            public StringField Place;
            public Int32Field BloodGroup;
            public StringField Phone;
            public StringField EMail;
            public StringField Address;
        }
    }
}
