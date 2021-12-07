using FluentMigrator;
using Serenity.Extensions;

namespace LBYS.Migrations.DefaultDB
{
    [Migration(20211108100030)]
    public class DefaultDB_20211108_100030_UserPermissions : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("UserPermissions", "UserPermissionId", s => s
                .WithColumn("UserId").AsInt32().NotNullable().ForeignKey("FK_UserPermissions_User", "Users", "UserId")
                .WithColumn("PermissionKey").AsString(100).NotNullable()
                .WithColumn("Granted").AsBoolean().NotNullable().WithDefaultValue(true)
            );

            Create.Index("UQ_UserPerm_UserId_PermKey")
                .OnTable("UserPermissions")
                .OnColumn("UserId").Ascending()
                .OnColumn("PermissionKey").Ascending()
                .WithOptions().Unique();
        }
    }
}
