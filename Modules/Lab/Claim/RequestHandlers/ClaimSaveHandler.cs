using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.ClaimRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.ClaimRow;

namespace LBYS.Lab
{
    public interface IClaimSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClaimSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IClaimSaveHandler
    {
        public ClaimSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}