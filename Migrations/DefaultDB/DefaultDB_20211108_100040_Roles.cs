using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
    [Migration(20211108100040)]
    public class DefaultDB_20211108_100040_Roles : AutoReversingMigration
    {
        public override void Up()
        {
             this.CreateTableWithId32("Roles", "RoleId", s => s
                .WithColumn("RoleName").AsString(100).NotNullable()
            );
        }
    }
}
