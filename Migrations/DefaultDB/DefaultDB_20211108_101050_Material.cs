using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
      [Migration(20211108_101050)]
      public class DefaultDB_20211108_101050_Material : AutoReversingMigration
      {
         public override void Up()
         {
            this.CreateTableWithId32("Material", "Id", s => s
               .WithColumn("Name").AsString(100).NotNullable()
               
               .WithColumn("InsertDate").AsDateTime().NotNullable()
               .WithColumn("InsertUserId").AsInt32().NotNullable()
               .WithColumn("UpdateDate").AsDateTime().Nullable()
               .WithColumn("UpdateUserId").AsInt32().Nullable()
               .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));
         }
      }
}
