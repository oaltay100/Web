using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108102020)]
	public class DefaultDB_20211108_102020_Device : AutoReversingMigration
	{
		public override void Up()
		{
			this.CreateTableWithId32("Device", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Device_Laboratory","Laboratory","Id")
				.WithColumn("Type").AsInt32().NotNullable()
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("Ip").AsString(30).Nullable()
				.WithColumn("Host").AsString(30).Nullable()
				.WithColumn("Port").AsString(20).Nullable()
				.WithColumn("Boudrate").AsInt32().Nullable()
				.WithColumn("Databits").AsInt32().Nullable()
				.WithColumn("Stopbits").AsInt32().Nullable()
				.WithColumn("Parity").AsInt32().Nullable()
				.WithColumn("Handshake").AsInt32().Nullable()
				.WithColumn("Dtr").AsBoolean().Nullable()
				.WithColumn("Rts").AsBoolean().Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
		}
	}
}
