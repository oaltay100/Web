using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.UnitRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.UnitRow;

namespace LBYS.Lab
{
    public interface IUnitSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IUnitSaveHandler
    {
        public UnitSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}