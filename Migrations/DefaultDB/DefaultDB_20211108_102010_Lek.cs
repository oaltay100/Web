using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108102010)]
	public class DefaultDB_20211108_102010_Lek : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Lek", "Id", s => s
				.WithColumn("UnitId").AsInt32().NotNullable().ForeignKey("FK_Lek_Unit","Unit","Id")
				.WithColumn("Type").AsInt32().NotNullable()
				.WithColumn("Lek").AsInt32().NotNullable()
				.WithColumn("Warning").AsInt32().NotNullable()
				.WithColumn("Error").AsInt32().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
