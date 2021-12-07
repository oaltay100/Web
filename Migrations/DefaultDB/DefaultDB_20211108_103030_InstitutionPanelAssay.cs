using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108103030)]
   public class DefaultDB_20211108_103030_InstitutionPanelAssay : AutoReversingMigration
   {
      public override void Up()
      {
         this.CreateTableWithId32("InstitutionPanelAssay", "Id", s => s
            .WithColumn("InstitutionPanelId").AsInt32().NotNullable().ForeignKey("FK_InstitutionPanelAssay_InstitutionPanel","InstitutionPanel","Id")
            .WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_InstitutionPanelAssay_Assay","Assay","Id")
            .WithColumn("Price").AsDecimal().Nullable()
         );
      }
   }
}
