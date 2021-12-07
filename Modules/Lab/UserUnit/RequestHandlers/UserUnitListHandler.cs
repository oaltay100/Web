using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.UserUnitRow>;
using MyRow = LBYS.Lab.UserUnitRow;

namespace LBYS.Lab
{
    public interface IUserUnitListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UserUnitListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserUnitListHandler
    {
        public UserUnitListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}