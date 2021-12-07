using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108101060)]
	public class DefaultDB_20211108_101060_Tube : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Tube", "Id", s => s
				.WithColumn("MaterialId").AsInt32().NotNullable().ForeignKey("FK_Tube_Material","Material","Id")
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("Bar").AsInt32().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
