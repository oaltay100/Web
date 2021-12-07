using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108104000)]
	public class DefaultDB_20211108_104000_Sample : AutoReversingMigration
	{
		public override void Up()
		{
		   	this.CreateTableWithId32("Sample", "Id", s => s
				.WithColumn("ClaimId").AsInt32().NotNullable().ForeignKey("FK_Sample_Claim","Claim","Id")
				.WithColumn("UnitId").AsInt32().NotNullable().ForeignKey("FK_Sample_Unit","Unit","Id")
				.WithColumn("Barcode").AsInt32().Nullable()
				.WithColumn("Rack").AsString(20).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
