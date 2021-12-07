using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108103090)]
	public class DefaultDB_20211108_103090_Claim : AutoReversingMigration
	{
      	public override void Up()
       	{
		   	this.CreateTableWithId32("Claim", "Id", s => s
				.WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_Claim_Laboratory","Laboratory","Id")
				.WithColumn("RecordDate").AsDateTime().NotNullable()
				.WithColumn("InstitutionId").AsInt32().NotNullable().ForeignKey("FK_Claim_Institution","Institution","Id")
				.WithColumn("PatientId").AsInt32().NotNullable().ForeignKey("FK_Claim_Patient","Patient","Id")
				.WithColumn("ClaimType").AsInt16().NotNullable()
				.WithColumn("Priorty").AsInt32().NotNullable()
				.WithColumn("Description").AsString(250).Nullable()
				.WithColumn("InvoiceId").AsInt32().Nullable().ForeignKey("FK_Claim_Invoice","Invoice","Id")
				.WithColumn("PaymentType").AsInt32().Nullable()
				.WithColumn("PaymentStatus").AsBoolean().Nullable()
				.WithColumn("Fee").AsDecimal().Nullable()
				.WithColumn("Price").AsDecimal().Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
