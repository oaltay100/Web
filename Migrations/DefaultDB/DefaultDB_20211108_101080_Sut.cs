using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108101080)]
	public class DefaultDB_20211108_101080_Sut : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Sut", "Id", s => s
				.WithColumn("Name").AsString(250).NotNullable()
				.WithColumn("Code").AsString(50).Nullable()
				.WithColumn("Loinc").AsString(50).Nullable()
				.WithColumn("Point").AsDecimal().Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
