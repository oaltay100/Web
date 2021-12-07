using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.UserInstitutionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.UserInstitutionRow;

namespace LBYS.Lab
{
    public interface IUserInstitutionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserInstitutionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUserInstitutionSaveHandler
    {
        public UserInstitutionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}