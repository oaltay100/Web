using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   	[Migration(20211108104040)]
   	public class DefaultDB_20211108_104040_Bacterium : AutoReversingMigration
   	{
      	public override void Up()
       	{
		   	this.CreateTableWithId32("Bacterium", "Id", s => s
				.WithColumn("DetailId").AsInt32().NotNullable().ForeignKey("FK_Bacterium_Detail","Detail","Id")
				.WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_Bacterium_Assay","Assay","Id")
				.WithColumn("Name").AsString(250).Nullable()
				.WithColumn("Result").AsString(250).Nullable()
				.WithColumn("DescriptionId").AsInt32().Nullable().ForeignKey("FK_Bacterium_Description","Description","Id")
				.WithColumn("Colony").AsString(20).Nullable()
				.WithColumn("Type").AsInt32().Nullable()
					
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
