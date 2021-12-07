using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108102000)]
   public class DefaultDB_20211108_102000_AssayResult : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("AssayResult", "Id", s => s
            .WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_AssayResult_Assay","Assay","Id")
         );
      }
   }
}
