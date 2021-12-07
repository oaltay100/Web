using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108101020)]
	public class DefaultDB_20211108_101020_Template : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Template", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Template_Laboratory","Laboratory","Id")
				.WithColumn("Type").AsInt32().NotNullable()
				.WithColumn("BGColor").AsString(10).NotNullable()
				.WithColumn("Color").AsString(10).NotNullable()
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
