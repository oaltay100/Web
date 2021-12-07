using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
   [Migration(20211108103060)]
   public class DefaultDB_20211108_103060_PanelAssay : AutoReversingMigration
   {
         public override void Up()
         {
            this.CreateTableWithId32("PanelAssay", "Id", s => s
               .WithColumn("PanelId").AsInt32().NotNullable().ForeignKey("FK_PanelAssay_Panel","Panel","Id")
               .WithColumn("AssayId").AsInt32().NotNullable().ForeignKey("FK_PanelAssay_Assay","Assay","Id")
            );
         }
   }
}
