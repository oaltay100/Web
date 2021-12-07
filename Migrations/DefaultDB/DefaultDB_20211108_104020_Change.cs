using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108_104020)]
   public class DefaultDB_20211108_104020_Change : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("Change", "Id", s => s
            .WithColumn("DetailId").AsInt32().NotNullable().ForeignKey("FK_Change_Detail","Detail","Id")
            .WithColumn("Result").AsString(250).Nullable()
            
            .WithColumn("InsertDate").AsDateTime().NotNullable()
            .WithColumn("InsertUserId").AsInt32().NotNullable()
            .WithColumn("UpdateDate").AsDateTime().Nullable()
            .WithColumn("UpdateUserId").AsInt32().Nullable()
            .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
         );
      }
   }
}
