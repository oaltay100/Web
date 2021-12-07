using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.UserUnitRow;

namespace LBYS.Lab
{
    public interface IUserUnitDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UserUnitDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUserUnitDeleteHandler
    {
        public UserUnitDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}