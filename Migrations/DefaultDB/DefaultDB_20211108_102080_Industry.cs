using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108102080)]
   public class DefaultDB_20211108_102080_Industry : AutoReversingMigration
   {
      	public override void Up()
       	{
		   	this.CreateTableWithId32("Industry", "Id", s => s
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("Phone").AsString(15).Nullable()
				.WithColumn("Address").AsString(500).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
