using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.ControlRow>;
using MyRow = LBYS.Lab.ControlRow;

namespace LBYS.Lab
{
    public interface IControlListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ControlListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IControlListHandler
    {
        public ControlListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}