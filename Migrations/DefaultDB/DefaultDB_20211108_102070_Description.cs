using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108102070)]
	public class DefaultDB_20211108_102070_Description : AutoReversingMigration
	{
		public override void Up()
		{
		   	this.CreateTableWithId32("Description", "Id", s => s
				.WithColumn("Type").AsInt32().NotNullable()
				.WithColumn("Description").AsString(100).NotNullable()
				.WithColumn("Code").AsString(100).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
