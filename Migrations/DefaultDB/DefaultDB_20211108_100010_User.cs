using FluentMigrator;
using Serenity.Extensions;
using System;

namespace LBYS.Migrations.DefaultDB
{

    [Migration(20211108100010)]
    public class DefaultDB_20211108_100010_User : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Users", "UserId", s => s
                .WithColumn("Username").AsString(100).NotNullable()
                .WithColumn("DisplayName").AsString(100).NotNullable()
                .WithColumn("Email").AsString(100).Nullable()
                .WithColumn("Source").AsString(4).NotNullable()
                .WithColumn("PasswordHash").AsString(86).NotNullable()
                .WithColumn("PasswordSalt").AsString(10).NotNullable()
                .WithColumn("LastDirectoryUpdate").AsDateTime().Nullable()
                .WithColumn("UserImage").AsString(100).Nullable()
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1)
            );

            Insert.IntoTable("Users").Row(new
            {
                Username = "admin",
                DisplayName = "Administrator",
                Email = "admin@dummy.com",
                Source = "site",
                PasswordHash = "vBeL05mmQ6wQGzSy9DwH+IRN/Tf9oEFwMIYt/s/B/Jr37HPGwccozZtL24T6iAxEbkHPhw5JiHqHpJ43YxHfVw",
                PasswordSalt = "f2e6n",
                InsertDate = new DateTime(2014, 1, 1),
                InsertUserId = 1,
                IsActive = 1
            });

        }
    }
}
