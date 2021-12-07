using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108101030)]
	public class DefaultDB_20211108_101030_Report : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Report", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Report_Laboratory","Laboratory","Id")
				.WithColumn("Type").AsInt32().NotNullable()
				.WithColumn("Report").AsString(100).NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
