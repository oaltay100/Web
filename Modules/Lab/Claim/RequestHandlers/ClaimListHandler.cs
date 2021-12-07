using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.ClaimRow>;
using MyRow = LBYS.Lab.ClaimRow;

namespace LBYS.Lab
{
    public interface IClaimListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ClaimListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IClaimListHandler
    {
        public ClaimListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}