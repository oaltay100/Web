using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.PanelAssayRow>;
using MyRow = LBYS.Lab.PanelAssayRow;

namespace LBYS.Lab
{
    public interface IPanelAssayListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelAssayListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPanelAssayListHandler
    {
        public PanelAssayListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}