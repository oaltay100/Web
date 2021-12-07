using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108_102030)]
	public class DefaultDB_20211108_102030_Code : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Code", "Id", s => s
				.WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_Code_Assay","Assay","Id")
				.WithColumn("DeviceId").AsInt32().NotNullable().ForeignKey("FK_Code_Device","Device","Id")
				.WithColumn("Code").AsString(50).NotNullable()
				.WithColumn("Factor").AsDecimal().NotNullable()
				.WithColumn("Digit").AsInt32().NotNullable()
				.WithColumn("Direction").AsBoolean().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
   	}
}
