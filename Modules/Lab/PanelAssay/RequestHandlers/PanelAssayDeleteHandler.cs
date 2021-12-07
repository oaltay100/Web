using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.PanelAssayRow;

namespace LBYS.Lab
{
    public interface IPanelAssayDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelAssayDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPanelAssayDeleteHandler
    {
        public PanelAssayDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}