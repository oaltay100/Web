using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.PanelAssayRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.PanelAssayRow;

namespace LBYS.Lab
{
    public interface IPanelAssaySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelAssaySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPanelAssaySaveHandler
    {
        public PanelAssaySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}