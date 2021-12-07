using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.UserUnitRow>;
using MyRow = LBYS.Lab.UserUnitRow;

namespace LBYS.Lab
{
    public interface IUserUnitRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserUnitRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserUnitRetrieveHandler
    {
        public UserUnitRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}