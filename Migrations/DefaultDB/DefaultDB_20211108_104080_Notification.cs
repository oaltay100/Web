using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108104080)]
   public class DefaultDB_20211108_104080_Notification : AutoReversingMigration
   {
      public override void Up()
      {
          this.CreateTableWithId32("Notification", "Id", s => s
            .WithColumn("UserId").AsInt32().Nullable().ForeignKey("FK_Notification_Users","Users","UserId")
            .WithColumn("Message").AsString(250).NotNullable()
            
            .WithColumn("InsertDate").AsDateTime().NotNullable()
            .WithColumn("InsertUserId").AsInt32().NotNullable()
            .WithColumn("UpdateDate").AsDateTime().Nullable()
            .WithColumn("UpdateUserId").AsInt32().Nullable()
            .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
         );
      }
   }
}
