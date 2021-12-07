using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   	[Migration(20211108104030)]
   	public class DefaultDB_20211108_104030_Image : AutoReversingMigration
   	{
      	public override void Up()
       	{
		   this.CreateTableWithId32("Image", "Id", s => s
				.WithColumn("DetailId").AsInt32().NotNullable().ForeignKey("FK_Image_Detail","Detail","Id")
				.WithColumn("Path").AsString(250).NotNullable()
				.WithColumn("StudyUid").AsString(100).Nullable()
				.WithColumn("SeriUid").AsString(100).Nullable()
				.WithColumn("ImageUid").AsString(100).Nullable()
				
				.WithColumn("InsertDate").AsDateTime().NotNullable()
				.WithColumn("InsertUserId").AsInt32().NotNullable()
				.WithColumn("UpdateDate").AsDateTime().Nullable()
				.WithColumn("UpdateUserId").AsInt32().Nullable()
				.WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
			);
      	}
   	}
}
