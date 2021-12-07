using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.UserLaboratoryRow;

namespace LBYS.Lab
{
    public interface IUserLaboratoryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UserLaboratoryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUserLaboratoryDeleteHandler
    {
        public UserLaboratoryDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}