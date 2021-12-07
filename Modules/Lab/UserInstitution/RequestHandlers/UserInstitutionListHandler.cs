using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.UserInstitutionRow>;
using MyRow = LBYS.Lab.UserInstitutionRow;

namespace LBYS.Lab
{
    public interface IUserInstitutionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UserInstitutionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserInstitutionListHandler
    {
        public UserInstitutionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}