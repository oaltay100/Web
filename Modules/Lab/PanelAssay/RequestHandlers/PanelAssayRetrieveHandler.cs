using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.PanelAssayRow>;
using MyRow = LBYS.Lab.PanelAssayRow;

namespace LBYS.Lab
{
    public interface IPanelAssayRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelAssayRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPanelAssayRetrieveHandler
    {
        public PanelAssayRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}