using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108101010)]
	public class DefaultDB_20211108_101010_Doctor : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Doctor", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Doctor_Laboratory","Laboratory","Id")
				.WithColumn("Name").AsString(50).NotNullable()
				.WithColumn("IdNumber").AsString(15).NotNullable()
				.WithColumn("RegistrationNumber").AsString(50).Nullable()
				.WithColumn("Gender").AsInt32().Nullable()
				.WithColumn("Phone").AsString(15).Nullable()
				.WithColumn("EMail").AsString(50).Nullable()
				.WithColumn("Address").AsString(250).Nullable()
				.WithColumn("Task").AsInt32().Nullable()
				.WithColumn("Appellation").AsInt32().Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
