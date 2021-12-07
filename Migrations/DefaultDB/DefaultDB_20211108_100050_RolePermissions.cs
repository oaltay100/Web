using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
    [Migration(20211108100050)]
    public class DefaultDB_20211108_100050_RolePermissions : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("RolePermissions", "RolePermissionId", s => s
                .WithColumn("RoleId").AsInt32().NotNullable().ForeignKey("FK_RolePermissions_Role", "Roles", "RoleId")
                .WithColumn("PermissionKey").AsString(100).NotNullable()
            );

            Create.Index("UQ_RolePerm_RoleId_PermKey")
                .OnTable("RolePermissions")
                .OnColumn("RoleId").Ascending()
                .OnColumn("PermissionKey").Ascending()
                .WithOptions().Unique();

        }
    }
}
