using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.UserInstitutionRow>;
using MyRow = LBYS.Lab.UserInstitutionRow;

namespace LBYS.Lab
{
    public interface IUserInstitutionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserInstitutionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUserInstitutionRetrieveHandler
    {
        public UserInstitutionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}