using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.LekRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.LekRow;

namespace LBYS.Lab
{
    public interface ILekSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LekSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILekSaveHandler
    {
        public LekSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}