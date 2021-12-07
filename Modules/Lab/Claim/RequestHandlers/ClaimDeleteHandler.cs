using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.ClaimRow;

namespace LBYS.Lab
{
    public interface IClaimDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ClaimDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IClaimDeleteHandler
    {
        public ClaimDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}