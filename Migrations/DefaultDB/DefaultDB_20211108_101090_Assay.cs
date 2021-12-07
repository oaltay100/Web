using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108_101090)]
	public class DefaultDB_20211108_101090_Assay : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Assay", "Id", s => s
				.WithColumn("UnitId").AsInt32().NotNullable().ForeignKey("FK_Assay_Unit","Unit","Id")
				.WithColumn("SutId").AsInt32().NotNullable().ForeignKey("FK_Assay_Sut","Sut","Id")
				.WithColumn("ParentId").AsInt32().Nullable().ForeignKey("FK_Assay_Assay","Assay","Id")
				.WithColumn("Unit").AsString(50).Nullable()
				.WithColumn("ResultType").AsInt32().NotNullable()
				.WithColumn("Sort").AsInt32().Nullable()
				.WithColumn("Formula").AsString(500).Nullable()
				.WithColumn("Hide").AsBoolean().NotNullable()
				.WithColumn("Method").AsString(50).Nullable()
				.WithColumn("MelisId").AsInt32().Nullable()
				.WithColumn("Price").AsDecimal().Nullable()
				.WithColumn("Price2").AsDecimal().Nullable()
				.WithColumn("DefaultValue").AsString(200).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
