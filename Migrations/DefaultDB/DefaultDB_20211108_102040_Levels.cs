using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108102040)]
   public class DefaultDB_20211108_102040_Levels : AutoReversingMigration
   {
		public override void Up()
		{
			this.CreateTableWithId32("Levels", "Id", s => s
				.WithColumn("CodeId").AsInt32().NotNullable().ForeignKey("FK_Levels_Code","Code","Id")
				.WithColumn("Name").AsString(250).NotNullable()
				.WithColumn("Low").AsDecimal().NotNullable()
				.WithColumn("High").AsDecimal().NotNullable()
				.WithColumn("Lot").AsString(50).NotNullable()
				.WithColumn("Hide").AsBoolean().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
   }
}
