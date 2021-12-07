using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   	[Migration(20211108104050)]
   	public class DefaultDB_20211108_104050_Antibiogram : AutoReversingMigration
   	{
      	public override void Up()
       	{
		   	this.CreateTableWithId32("Antibiogram", "UseIdrId", s => s
				.WithColumn("BacteriumId").AsInt32().NotNullable().ForeignKey("FK_Antibiogram_Bacterium","Bacterium","Id")
				.WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_Antibiogram_Assay","Assay","Id")
				.WithColumn("Result").AsString(250).Nullable()
				.WithColumn("Description").AsString(250).Nullable()
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
