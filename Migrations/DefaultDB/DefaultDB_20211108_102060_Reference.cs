using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   	[Migration(20211108102060)]
	public class DefaultDB_20211108_102060_Reference : AutoReversingMigration
	{
		public override void Up()
		{
		   	this.CreateTableWithId32("Reference", "Id", s => s
				.WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_Reference_Assay","Assay","Id")
				.WithColumn("Type").AsInt32().NotNullable()
				.WithColumn("Gender").AsInt32().NotNullable()
				.WithColumn("Age").AsInt32().NotNullable()
				.WithColumn("Start").AsInt32().NotNullable()
				.WithColumn("Finish").AsInt32().NotNullable()
				.WithColumn("Low").AsDecimal().Nullable()
				.WithColumn("High").AsDecimal().Nullable()
				.WithColumn("Description").AsString(500).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
