using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108101000)]
	public class DefaultDB_20211108_101000_Laboratory : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Laboratory", "Id", s => s
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("Logo").AsString(100).Nullable()
				.WithColumn("Phone").AsString(15).Nullable()
				.WithColumn("Fax").AsString(15).Nullable()
				.WithColumn("EMail").AsString(50).Nullable()
				.WithColumn("Address").AsString(250).Nullable()
				.WithColumn("Mernis").AsString(100).Nullable()
				.WithColumn("Institution").AsString(100).Nullable()
				.WithColumn("SrvMelis").AsBoolean().NotNullable()
				.WithColumn("SrvENabiz").AsBoolean().NotNullable()
				.WithColumn("SrvCovid").AsBoolean().NotNullable()
				.WithColumn("IsPaymentMandatory").AsBoolean().NotNullable()
				.WithColumn("IsAcceptrequired").AsBoolean().NotNullable()
				.WithColumn("IsDoNotReprint").AsBoolean().NotNullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
