using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.UserUnitRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.UserUnitRow;

namespace LBYS.Lab
{
    public interface IUserUnitSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UserUnitSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUserUnitSaveHandler
    {
        public UserUnitSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}