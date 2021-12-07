using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108103070)]
	public class DefaultDB_20211108_103070_Patient : AutoReversingMigration
	{
		public override void Up()
		{
		   	this.CreateTableWithId32("Patient", "Id", s => s
				.WithColumn("Name").AsString(50).NotNullable()
				.WithColumn("IdNumber").AsString(20).Nullable()
				.WithColumn("FatherName").AsString(50).Nullable()
				.WithColumn("MotherName").AsString(50).Nullable()
				.WithColumn("Birthdate").AsDate().Nullable()
				.WithColumn("Place").AsString(50).Nullable()
				.WithColumn("BloodGroup").AsInt32().Nullable()
				.WithColumn("Phone").AsString(15).Nullable()
				.WithColumn("EMail").AsString(50).Nullable()
				.WithColumn("Address").AsString(250).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
