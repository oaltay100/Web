using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.PanelRow>;
using MyRow = LBYS.Lab.PanelRow;

namespace LBYS.Lab
{
    public interface IPanelRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPanelRetrieveHandler
    {
        public PanelRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}