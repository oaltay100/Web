using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace LBYS.Lab
{
    [ConnectionKey("Default"), Module("Lab"), TableName("[dbo].[PanelAssay]")]
    [DisplayName("Panel Assay"), InstanceName("Panel Assay")]
    [ReadPermission("?")]
    [ModifyPermission("?")]
    public sealed class PanelAssayRow : Row<PanelAssayRow.RowFields>, IIdRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Panel"), NotNull, ForeignKey("[dbo].[Panel]", "Id"), LeftJoin("jPanel"), TextualField("PanelName")]
        public Int32? PanelId
        {
            get => fields.PanelId[this];
            set => fields.PanelId[this] = value;
        }

        [DisplayName("Assay"), NotNull, ForeignKey("[dbo].[Assay]", "Id"), LeftJoin("jAssay"), TextualField("AssayUnit")]
        public Int32? AssayId
        {
            get => fields.AssayId[this];
            set => fields.AssayId[this] = value;
        }

        [DisplayName("Panel Laboratory Id"), Expression("jPanel.[LaboratoryId]")]
        public Int32? PanelLaboratoryId
        {
            get => fields.PanelLaboratoryId[this];
            set => fields.PanelLaboratoryId[this] = value;
        }

        [DisplayName("Panel Name"), Expression("jPanel.[Name]")]
        public String PanelName
        {
            get => fields.PanelName[this];
            set => fields.PanelName[this] = value;
        }

        [DisplayName("Panel Price"), Expression("jPanel.[Price]")]
        public Decimal? PanelPrice
        {
            get => fields.PanelPrice[this];
            set => fields.PanelPrice[this] = value;
        }

        [DisplayName("Panel Insert Date"), Expression("jPanel.[InsertDate]")]
        public DateTime? PanelInsertDate
        {
            get => fields.PanelInsertDate[this];
            set => fields.PanelInsertDate[this] = value;
        }

        [DisplayName("Panel Insert User Id"), Expression("jPanel.[InsertUserId]")]
        public Int32? PanelInsertUserId
        {
            get => fields.PanelInsertUserId[this];
            set => fields.PanelInsertUserId[this] = value;
        }

        [DisplayName("Panel Update Date"), Expression("jPanel.[UpdateDate]")]
        public DateTime? PanelUpdateDate
        {
            get => fields.PanelUpdateDate[this];
            set => fields.PanelUpdateDate[this] = value;
        }

        [DisplayName("Panel Update User Id"), Expression("jPanel.[UpdateUserId]")]
        public Int32? PanelUpdateUserId
        {
            get => fields.PanelUpdateUserId[this];
            set => fields.PanelUpdateUserId[this] = value;
        }

        [DisplayName("Panel Is Active"), Expression("jPanel.[IsActive]")]
        public Int16? PanelIsActive
        {
            get => fields.PanelIsActive[this];
            set => fields.PanelIsActive[this] = value;
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

        public PanelAssayRow()
            : base()
        {
        }

        public PanelAssayRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field PanelId;
            public Int32Field AssayId;

            public Int32Field PanelLaboratoryId;
            public StringField PanelName;
            public DecimalField PanelPrice;
            public DateTimeField PanelInsertDate;
            public Int32Field PanelInsertUserId;
            public DateTimeField PanelUpdateDate;
            public Int32Field PanelUpdateUserId;
            public Int16Field PanelIsActive;

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
        }
    }
}
