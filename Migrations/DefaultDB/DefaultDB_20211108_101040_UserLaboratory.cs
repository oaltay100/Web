using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108101040)]
   public class DefaultDB_20211108_101040_UserLaboratory : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("UserLaboratory", "Id", s => s
            .WithColumn("UserId").AsInt32().NotNullable().ForeignKey("FK_UserLaboratory_User","Users","UserId")
            .WithColumn("LaboratoryId").AsInt32().NotNullable().ForeignKey("FK_UserLaboratory_Laboratory","Laboratory","Id")
         );
      }
   }
}
