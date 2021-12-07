using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108103010)]
   public class DefaultDB_20211108_103010_UserInstitution : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("UserInstitution", "Id", s => s
            .WithColumn("UserId").AsInt32().NotNullable().ForeignKey("FK_UserInstitution_Users","Users","UserId")
            .WithColumn("InstitutionId").AsInt32().NotNullable().ForeignKey("FK_UserInstitution_Institution","Institution","Id")
         );
      }
   }
}
