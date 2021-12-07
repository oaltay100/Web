using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.LevelsRow>;
using MyRow = LBYS.Lab.LevelsRow;

namespace LBYS.Lab
{
    public interface ILevelsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LevelsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILevelsListHandler
    {
        public LevelsListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}