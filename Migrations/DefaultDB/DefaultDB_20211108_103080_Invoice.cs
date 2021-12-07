using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108103080)]
   public class DefaultDB_20211108_103080_Invoice : AutoReversingMigration
   {
      	public override void Up()
       	{
		   	this.CreateTableWithId32("Invoice", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Invoice_Laboratory","Laboratory","Id")
				.WithColumn("InstitutionId").AsInt32().NotNullable().ForeignKey("FK_Invoice_Institution","Institution","Id")
				.WithColumn("Year").AsInt32().NotNullable()
				.WithColumn("Number").AsInt32().NotNullable()
				.WithColumn("Date").AsDateTime().NotNullable()
				.WithColumn("Prite").AsDecimal().Nullable()
				.WithColumn("Counts").AsInt32().Nullable()
				.WithColumn("Status").AsInt32().Nullable()
			
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   }
}
