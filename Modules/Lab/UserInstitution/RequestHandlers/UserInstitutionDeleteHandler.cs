using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.UserInstitutionRow;

namespace LBYS.Lab
{
    public interface IUserInstitutionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UserInstitutionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUserInstitutionDeleteHandler
    {
        public UserInstitutionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}