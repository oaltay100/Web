using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.ClaimRow>;
using MyRow = LBYS.Lab.ClaimRow;

namespace LBYS.Lab
{
    public interface IClaimRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ClaimRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IClaimRetrieveHandler
    {
        public ClaimRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}