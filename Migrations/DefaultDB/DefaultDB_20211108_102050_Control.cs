using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108102050)]
	public class DefaultDB_20211108_102050_Control : AutoReversingMigration
	{
		public override void Up()
		{
		   	this.CreateTableWithId32("Control", "Id", s => s
				.WithColumn("LevelsId").AsInt32().NotNullable().ForeignKey("FK_Control_Levels","Levels","Id")
				.WithColumn("RecordDate").AsDateTime().NotNullable()
				.WithColumn("Result").AsString(250).NotNullable()
				.WithColumn("Description").AsString(250).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
