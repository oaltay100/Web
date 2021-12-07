using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108103020)]
   public class DefaultDB_20211108_103020_InstitutionPanel : AutoReversingMigration
   {
      	public override void Up()
       	{
		   	this.CreateTableWithId32("InstitutionPanel", "Id", s => s
				.WithColumn("InstitutionId").AsInt32().NotNullable().ForeignKey("FK_InstitutionPanel_Institution","Institution","Id")
				.WithColumn("ClaimType").AsInt32().NotNullable()
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("PaymentType").AsInt32().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
