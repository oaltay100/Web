using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.PanelRow;

namespace LBYS.Lab
{
    public interface IPanelDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PanelDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPanelDeleteHandler
    {
        public PanelDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}