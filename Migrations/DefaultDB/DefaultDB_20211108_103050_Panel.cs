using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108103050)]
	public class DefaultDB_20211108_103050_Panel : AutoReversingMigration
	{
		public override void Up()
		{
		   	this.CreateTableWithId32("Panel", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Panel_Laboratory","Laboratory","Id")
				.WithColumn("Name").AsString(250).NotNullable()
				.WithColumn("Price").AsDecimal().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
