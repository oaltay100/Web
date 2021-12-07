using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108103040)]
   public class DefaultDB_20211108_103040_UserUnit : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("UserUnit", "Id", s => s
            .WithColumn("UserId").AsInt32().NotNullable().ForeignKey("FK_UserUnit_User","Users","UserId")
            .WithColumn("UnitId").AsInt32().NotNullable().ForeignKey("FK_UserUnit_Unit","Unit","Id")
         );
      }
   }
}
