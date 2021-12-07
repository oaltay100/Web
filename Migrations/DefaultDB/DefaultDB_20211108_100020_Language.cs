using FluentMigrator;
using Serenity.Extensions;
using System;

namespace LBYS.Migrations.DefaultDB
{

    [Migration(20211108100020)]
    public class DefaultDB_20211108_100020_Language : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("Languages", "Id", s => s
                .WithColumn("LanguageId").AsString(10).NotNullable()
                .WithColumn("LanguageName").AsString(50).NotNullable());

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "en",
                LanguageName = "English"
            });

            Insert.IntoTable("Languages").Row(new
            {
                LanguageId = "tr",
                LanguageName = "Turkish"
            });

        }
    }
}
