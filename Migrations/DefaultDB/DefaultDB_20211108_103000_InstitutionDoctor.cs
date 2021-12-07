using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108103000)]
   public class DefaultDB_20211108_103000_InstitutionDoctor : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("InstitutionDoctor", "Id", s => s
            .WithColumn("InstitutionId").AsInt32().NotNullable().ForeignKey("FK_InstitutionDoctor_Institution","Institution","Id")
            .WithColumn("DoctorId").AsInt32().NotNullable().ForeignKey("FK_InstitutionDoctor_Doctor","Doctor","Id")
         );
      }
   }
}
