using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108101070)]
	public class DefaultDB_20211108_101070_Unit : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Unit", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Unit_Laboratory","Laboratory","Id")
				.WithColumn("TubeId").AsInt32().NotNullable().ForeignKey("FK_Unit_Tube","Tube","Id")
				.WithColumn("Type").AsInt32().NotNullable()
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("Sort").AsInt32().Nullable()
				.WithColumn("TimetoResults").AsInt32().Nullable()
				.WithColumn("IsAssayBarcode").AsBoolean().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
