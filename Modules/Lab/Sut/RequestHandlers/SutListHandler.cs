using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.SutRow>;
using MyRow = LBYS.Lab.SutRow;

namespace LBYS.Lab
{
    public interface ISutListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SutListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISutListHandler
    {
        public SutListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}