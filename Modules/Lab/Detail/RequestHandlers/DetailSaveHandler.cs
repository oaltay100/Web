using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.DetailRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.DetailRow;

namespace LBYS.Lab
{
    public interface IDetailSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DetailSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDetailSaveHandler
    {
        public DetailSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}