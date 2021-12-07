using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.PanelRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.PanelRow;

namespace LBYS.Lab
{
    public interface IPanelSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPanelSaveHandler
    {
        public PanelSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}