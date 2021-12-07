using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.TubeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.TubeRow;

namespace LBYS.Lab
{
    public interface ITubeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TubeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITubeSaveHandler
    {
        public TubeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}