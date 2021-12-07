using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.AcceptRow>;
using MyRow = LBYS.Lab.AcceptRow;

namespace LBYS.Lab
{
    public interface IAcceptListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AcceptListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAcceptListHandler
    {
        public AcceptListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}