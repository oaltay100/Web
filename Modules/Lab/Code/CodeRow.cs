using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[Code]")]
    [DisplayName("Code"), InstanceName("Code")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class CodeRow : BaseRow<CodeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Assay"), NotNull, ForeignKey("[dbo].[Assay]", "Id"), LeftJoin("jAssay"), TextualField("AssayUnit")]
        public Int32? AssayId
        {
            get => fields.AssayId[this];
            set => fields.AssayId[this] = value;
        }

        [DisplayName("Device"), NotNull, ForeignKey("[dbo].[Device]", "Id"), LeftJoin("jDevice"), TextualField("DeviceName")]
        public Int32? DeviceId
        {
            get => fields.DeviceId[this];
            set => fields.DeviceId[this] = value;
        }

        [DisplayName("Code"), Size(50), NotNull, QuickSearch, NameProperty]
        public String Code
        {
            get => fields.Code[this];
            set => fields.Code[this] = value;
        }

        [DisplayName("Factor"), Size(19), Scale(5), NotNull]
        public Decimal? Factor
        {
            get => fields.Factor[this];
            set => fields.Factor[this] = value;
        }

        [DisplayName("Digit"), NotNull]
        public Int32? Digit
        {
            get => fields.Digit[this];
            set => fields.Digit[this] = value;
        }

        [DisplayName("Direction"), NotNull]
        public Boolean? Direction
        {
            get => fields.Direction[this];
            set => fields.Direction[this] = value;
        }

        [DisplayName("Assay Unit Id"), Expression("jAssay.[UnitId]")]
        public Int32? AssayUnitId
        {
            get => fields.AssayUnitId[this];
            set => fields.AssayUnitId[this] = value;
        }

        [DisplayName("Assay Sut Id"), Expression("jAssay.[SutId]")]
        public Int32? AssaySutId
        {
            get => fields.AssaySutId[this];
            set => fields.AssaySutId[this] = value;
        }

        [DisplayName("Assay Parent Id"), Expression("jAssay.[ParentId]")]
        public Int32? AssayParentId
        {
            get => fields.AssayParentId[this];
            set => fields.AssayParentId[this] = value;
        }

        [DisplayName("Assay Unit"), Expression("jAssay.[Unit]")]
        public String AssayUnit
        {
            get => fields.AssayUnit[this];
            set => fields.AssayUnit[this] = value;
        }

        [DisplayName("Assay Result Type"), Expression("jAssay.[ResultType]")]
        public Int32? AssayResultType
        {
            get => fields.AssayResultType[this];
            set => fields.AssayResultType[this] = value;
        }

        [DisplayName("Assay Sort"), Expression("jAssay.[Sort]")]
        public Int32? AssaySort
        {
            get => fields.AssaySort[this];
            set => fields.AssaySort[this] = value;
        }

        [DisplayName("Assay Formula"), Expression("jAssay.[Formula]")]
        public String AssayFormula
        {
            get => fields.AssayFormula[this];
            set => fields.AssayFormula[this] = value;
        }

        [DisplayName("Assay Hide"), Expression("jAssay.[Hide]")]
        public Boolean? AssayHide
        {
            get => fields.AssayHide[this];
            set => fields.AssayHide[this] = value;
        }

        [DisplayName("Assay Method"), Expression("jAssay.[Method]")]
        public String AssayMethod
        {
            get => fields.AssayMethod[this];
            set => fields.AssayMethod[this] = value;
        }

        [DisplayName("Assay Melis Id"), Expression("jAssay.[MelisId]")]
        public Int32? AssayMelisId
        {
            get => fields.AssayMelisId[this];
            set => fields.AssayMelisId[this] = value;
        }

        [DisplayName("Assay Price"), Expression("jAssay.[Price]")]
        public Decimal? AssayPrice
        {
            get => fields.AssayPrice[this];
            set => fields.AssayPrice[this] = value;
        }

        [DisplayName("Assay Price2"), Expression("jAssay.[Price2]")]
        public Decimal? AssayPrice2
        {
            get => fields.AssayPrice2[this];
            set => fields.AssayPrice2[this] = value;
        }

        [DisplayName("Assay Default Value"), Expression("jAssay.[DefaultValue]")]
        public String AssayDefaultValue
        {
            get => fields.AssayDefaultValue[this];
            set => fields.AssayDefaultValue[this] = value;
        }

        [DisplayName("Assay Insert Date"), Expression("jAssay.[InsertDate]")]
        public DateTime? AssayInsertDate
        {
            get => fields.AssayInsertDate[this];
            set => fields.AssayInsertDate[this] = value;
        }

        [DisplayName("Assay Insert User Id"), Expression("jAssay.[InsertUserId]")]
        public Int32? AssayInsertUserId
        {
            get => fields.AssayInsertUserId[this];
            set => fields.AssayInsertUserId[this] = value;
        }

        [DisplayName("Assay Update Date"), Expression("jAssay.[UpdateDate]")]
        public DateTime? AssayUpdateDate
        {
            get => fields.AssayUpdateDate[this];
            set => fields.AssayUpdateDate[this] = value;
        }

        [DisplayName("Assay Update User Id"), Expression("jAssay.[UpdateUserId]")]
        public Int32? AssayUpdateUserId
        {
            get => fields.AssayUpdateUserId[this];
            set => fields.AssayUpdateUserId[this] = value;
        }

        [DisplayName("Assay Is Active"), Expression("jAssay.[IsActive]")]
        public Int16? AssayIsActive
        {
            get => fields.AssayIsActive[this];
            set => fields.AssayIsActive[this] = value;
        }

        [DisplayName("Device Laboratory Id"), Expression("jDevice.[LaboratoryId]")]
        public Int32? DeviceLaboratoryId
        {
            get => fields.DeviceLaboratoryId[this];
            set => fields.DeviceLaboratoryId[this] = value;
        }

        [DisplayName("Device Type"), Expression("jDevice.[Type]")]
        public Int32? DeviceType
        {
            get => fields.DeviceType[this];
            set => fields.DeviceType[this] = value;
        }

        [DisplayName("Device Name"), Expression("jDevice.[Name]")]
        public String DeviceName
        {
            get => fields.DeviceName[this];
            set => fields.DeviceName[this] = value;
        }

        [DisplayName("Device Ip"), Expression("jDevice.[Ip]")]
        public String DeviceIp
        {
            get => fields.DeviceIp[this];
            set => fields.DeviceIp[this] = value;
        }

        [DisplayName("Device Host"), Expression("jDevice.[Host]")]
        public String DeviceHost
        {
            get => fields.DeviceHost[this];
            set => fields.DeviceHost[this] = value;
        }

        [DisplayName("Device Port"), Expression("jDevice.[Port]")]
        public String DevicePort
        {
            get => fields.DevicePort[this];
            set => fields.DevicePort[this] = value;
        }

        [DisplayName("Device Boudrate"), Expression("jDevice.[Boudrate]")]
        public Int32? DeviceBoudrate
        {
            get => fields.DeviceBoudrate[this];
            set => fields.DeviceBoudrate[this] = value;
        }

        [DisplayName("Device Databits"), Expression("jDevice.[Databits]")]
        public Int32? DeviceDatabits
        {
            get => fields.DeviceDatabits[this];
            set => fields.DeviceDatabits[this] = value;
        }

        [DisplayName("Device Stopbits"), Expression("jDevice.[Stopbits]")]
        public Int32? DeviceStopbits
        {
            get => fields.DeviceStopbits[this];
            set => fields.DeviceStopbits[this] = value;
        }

        [DisplayName("Device Parity"), Expression("jDevice.[Parity]")]
        public Int32? DeviceParity
        {
            get => fields.DeviceParity[this];
            set => fields.DeviceParity[this] = value;
        }

        [DisplayName("Device Handshake"), Expression("jDevice.[Handshake]")]
        public Int32? DeviceHandshake
        {
            get => fields.DeviceHandshake[this];
            set => fields.DeviceHandshake[this] = value;
        }

        [DisplayName("Device Dtr"), Expression("jDevice.[Dtr]")]
        public Boolean? DeviceDtr
        {
            get => fields.DeviceDtr[this];
            set => fields.DeviceDtr[this] = value;
        }

        [DisplayName("Device Rts"), Expression("jDevice.[Rts]")]
        public Boolean? DeviceRts
        {
            get => fields.DeviceRts[this];
            set => fields.DeviceRts[this] = value;
        }

        [DisplayName("Device Insert Date"), Expression("jDevice.[InsertDate]")]
        public DateTime? DeviceInsertDate
        {
            get => fields.DeviceInsertDate[this];
            set => fields.DeviceInsertDate[this] = value;
        }

        [DisplayName("Device Insert User Id"), Expression("jDevice.[InsertUserId]")]
        public Int32? DeviceInsertUserId
        {
            get => fields.DeviceInsertUserId[this];
            set => fields.DeviceInsertUserId[this] = value;
        }

        [DisplayName("Device Update Date"), Expression("jDevice.[UpdateDate]")]
        public DateTime? DeviceUpdateDate
        {
            get => fields.DeviceUpdateDate[this];
            set => fields.DeviceUpdateDate[this] = value;
        }

        [DisplayName("Device Update User Id"), Expression("jDevice.[UpdateUserId]")]
        public Int32? DeviceUpdateUserId
        {
            get => fields.DeviceUpdateUserId[this];
            set => fields.DeviceUpdateUserId[this] = value;
        }

        [DisplayName("Device Is Active"), Expression("jDevice.[IsActive]")]
        public Int16? DeviceIsActive
        {
            get => fields.DeviceIsActive[this];
            set => fields.DeviceIsActive[this] = value;
        }

        public CodeRow()
            : base()
        {
        }

        public CodeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : BaseRowFields
        {
            public Int32Field Id;
            public Int32Field AssayId;
            public Int32Field DeviceId;
            public StringField Code;
            public DecimalField Factor;
            public Int32Field Digit;
            public BooleanField Direction;

            public Int32Field AssayUnitId;
            public Int32Field AssaySutId;
            public Int32Field AssayParentId;
            public StringField AssayUnit;
            public Int32Field AssayResultType;
            public Int32Field AssaySort;
            public StringField AssayFormula;
            public BooleanField AssayHide;
            public StringField AssayMethod;
            public Int32Field AssayMelisId;
            public DecimalField AssayPrice;
            public DecimalField AssayPrice2;
            public StringField AssayDefaultValue;
            public DateTimeField AssayInsertDate;
            public Int32Field AssayInsertUserId;
            public DateTimeField AssayUpdateDate;
            public Int32Field AssayUpdateUserId;
            public Int16Field AssayIsActive;

            public Int32Field DeviceLaboratoryId;
            public Int32Field DeviceType;
            public StringField DeviceName;
            public StringField DeviceIp;
            public StringField DeviceHost;
            public StringField DevicePort;
            public Int32Field DeviceBoudrate;
            public Int32Field DeviceDatabits;
            public Int32Field DeviceStopbits;
            public Int32Field DeviceParity;
            public Int32Field DeviceHandshake;
            public BooleanField DeviceDtr;
            public BooleanField DeviceRts;
            public DateTimeField DeviceInsertDate;
            public Int32Field DeviceInsertUserId;
            public DateTimeField DeviceUpdateDate;
            public Int32Field DeviceUpdateUserId;
            public Int16Field DeviceIsActive;
        }
    }
}
