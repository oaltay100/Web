using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
    [Migration(20211108100060)]
    public class DefaultDB_20211108_100060_UserRoles : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("UserRoles", "UserRoleId", s => s
                .WithColumn("UserId").AsInt32().NotNullable().ForeignKey("FK_UserRoles_User", "Users", "UserId")
                .WithColumn("RoleId").AsInt32().NotNullable().ForeignKey("FK_UserRoles_Role", "Roles", "RoleId")
            );

            Create.Index("UQ_UserRoles_UserId_RoleId")
                .OnTable("UserRoles")
                .OnColumn("UserId").Ascending()
                .OnColumn("RoleId").Ascending()
                .WithOptions().Unique();

            Create.Index("IX_UserRoles_RoleId_UserId")
                .OnTable("UserRoles")
                .OnColumn("RoleId").Ascending()
                .OnColumn("UserId").Ascending();
        }
    }
}
