using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108102090)]
   public class DefaultDB_20211108_102090_Institution : AutoReversingMigration
   {
      	public override void Up()
       	{
		   this.CreateTableWithId32("Institution", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Institution_Laboratory","Laboratory","Id")
				.WithColumn("IndustryId").AsInt32().Nullable().ForeignKey("FK_Institution_Industry","Industry","Id")
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("Phone").AsString(15).Nullable()
				.WithColumn("Address").AsString(250).Nullable()
				.WithColumn("PaymentType").AsInt32().NotNullable()
				.WithColumn("Price").AsDecimal().Nullable()
				.WithColumn("PriceType").AsInt32().NotNullable()
				.WithColumn("IsExternal").AsBoolean().NotNullable().WithDefaultValue(0)
				.WithColumn("Symbol").AsString(1).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   }
}
