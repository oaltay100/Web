namespace LBYS
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    public abstract class BaseRow<TFields> : Row<TFields>, IInsertLogRow, IUpdateLogRow, IIsActiveDeletedRow
        where TFields : BaseRowFields
    {
        protected BaseRow(TFields fields) : base(fields) { }
        protected BaseRow() : base() { }

        [DisplayName("Insert User"), NotNull, Insertable(false), Updatable(false), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jInsert"), TextualField("DisplayName")]
        public Int32? InsertUserId
        {
            get => fields.InsertUserId[this];
            set => fields.InsertUserId[this] = value;
        }

        [DisplayName("Insert Date"), Width(130), NotNull, Insertable(false), Updatable(false), DateTimeFormatter(DisplayFormat = "dd.MM.yyyy hh:mm:ss")]
        public DateTime? InsertDate
        {
            get => fields.InsertDate[this];
            set => fields.InsertDate[this] = value;
        }

        [DisplayName("Update User"), Insertable(false), Updatable(false), ForeignKey("[dbo].[Users]", "UserId"), LeftJoin("jUpdate"), TextualField("DisplayName")]
        public Int32? UpdateUserId
        {
            get => fields.UpdateUserId[this];
            set => fields.UpdateUserId[this] = value;
        }

        [DisplayName("Insert Date"), Width(130), Insertable(false), Updatable(false), DateTimeFormatter(DisplayFormat = "dd.MM.yyyy hh:mm:ss")]
        public DateTime? UpdateDate
        {
            get => fields.UpdateDate[this];
            set => fields.UpdateDate[this] = value;
        }

        [Insertable(false), Updatable(false)]
        public Int16? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Insert User Name"), Expression("jInsert.DisplayName")]
        public String InsertUserName
        {
            get => fields.InsertUserName[this];
            set => fields.InsertUserName[this] = value;
        } 

        [DisplayName("Update User Name"), Expression("jUpdate.DisplayName")]
        public String UpdateUserName
        {
            get => fields.UpdateUserName[this];
            set => fields.UpdateUserName[this] = value;
        }        

        Field IInsertLogRow.InsertUserIdField => fields.InsertUserId;
        Field IUpdateLogRow.UpdateUserIdField => fields.UpdateUserId;
        DateTimeField IInsertLogRow.InsertDateField => fields.InsertDate;
        DateTimeField IUpdateLogRow.UpdateDateField => fields.UpdateDate;
        Int16Field IIsActiveRow.IsActiveField => fields.IsActive;
    }

    public class BaseRowFields : RowFieldsBase
    {
        public Int32Field InsertUserId;
        public DateTimeField InsertDate;
        public Int32Field UpdateUserId;
        public DateTimeField UpdateDate;
        public Int16Field IsActive;

        public StringField InsertUserName;
        public StringField UpdateUserName;

        public BaseRowFields(string tableName = null, string fieldPrefix = null)
            : base(tableName, fieldPrefix)
        {
        }
    }
}
