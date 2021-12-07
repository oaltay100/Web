using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108104070)]
   public class DefaultDB_20211108_104070_Accept : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("Accept", "Id", s => s
            .WithColumn("SampleId").AsInt32().NotNullable().ForeignKey("FK_Accept_Sample","Sample","Id")
            .WithColumn("Accept").AsInt32().NotNullable()
            .WithColumn("AcceptDate").AsDateTime().NotNullable()
            .WithColumn("AcceptUserId").AsInt32().NotNullable().ForeignKey("FK_Accept_Users","Users","UserId")
         );
      }
   }
}
