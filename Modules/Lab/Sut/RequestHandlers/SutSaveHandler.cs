using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.SutRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.SutRow;

namespace LBYS.Lab
{
    public interface ISutSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SutSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISutSaveHandler
    {
        public SutSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}