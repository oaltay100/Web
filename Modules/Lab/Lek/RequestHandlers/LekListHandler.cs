using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.LekRow>;
using MyRow = LBYS.Lab.LekRow;

namespace LBYS.Lab
{
    public interface ILekListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LekListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILekListHandler
    {
        public LekListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}