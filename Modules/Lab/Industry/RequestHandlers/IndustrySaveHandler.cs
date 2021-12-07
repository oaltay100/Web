using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.IndustryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.IndustryRow;

namespace LBYS.Lab
{
    public interface IIndustrySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class IndustrySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IIndustrySaveHandler
    {
        public IndustrySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}