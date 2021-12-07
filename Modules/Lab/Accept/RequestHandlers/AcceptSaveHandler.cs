using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.AcceptRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.AcceptRow;

namespace LBYS.Lab
{
    public interface IAcceptSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AcceptSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAcceptSaveHandler
    {
        public AcceptSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}