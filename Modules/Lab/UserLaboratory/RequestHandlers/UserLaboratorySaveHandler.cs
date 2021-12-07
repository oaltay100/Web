using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.UserLaboratoryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.UserLaboratoryRow;

namespace LBYS.Lab
{
    public interface IUserLaboratorySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserLaboratorySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUserLaboratorySaveHandler
    {
        public UserLaboratorySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}