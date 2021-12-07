using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
	[Migration(20211108104010)]
	public class DefaultDB_20211108_104010_Detail : AutoReversingMigration
	{
      	public override void Up()
       	{
		   	this.CreateTableWithId32("Detail", "Id", s => s
				.WithColumn("SampleId").AsInt32().NotNullable().ForeignKey("FK_Detail_Sample","Sample","Id")
				.WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_Detail_Assay","Assay","Id")
				.WithColumn("ParentId").AsInt32().Nullable().ForeignKey("FK_Detail_Parent","Detail","Id")
				.WithColumn("Result").AsString(250).Nullable()
				.WithColumn("ResultDate").AsDateTime().Nullable()
				.WithColumn("ResultUserId").AsInt32().Nullable()
				.WithColumn("DeviceId").AsInt32().Nullable()
				.WithColumn("DeviceDate").AsDateTime().Nullable()
				.WithColumn("DescriptionId").AsInt32().Nullable().ForeignKey("FK_Detail_Description","Description","Id")
				.WithColumn("Picture").AsString(100).Nullable()
				.WithColumn("Unit").AsString(50).Nullable()
				.WithColumn("NLow").AsDecimal().Nullable()
				.WithColumn("NHigh").AsDecimal().Nullable()
				.WithColumn("PLow").AsDecimal().Nullable()
				.WithColumn("PHigh").AsDecimal().Nullable()
				.WithColumn("Special").AsString(250).Nullable()
				.WithColumn("Importance").AsInt32().Nullable()
				.WithColumn("Price").AsDecimal().Nullable()
				.WithColumn("InstitutionId").AsInt32().Nullable().ForeignKey("FK_Detail_Institution","Institution","Id")
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
