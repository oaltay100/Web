using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.PanelRow>;
using MyRow = LBYS.Lab.PanelRow;

namespace LBYS.Lab
{
    public interface IPanelListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPanelListHandler
    {
        public PanelListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}