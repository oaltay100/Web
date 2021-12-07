using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.AssayRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.AssayRow;

namespace LBYS.Lab
{
    public interface IAssaySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssaySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAssaySaveHandler
    {
        public AssaySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}