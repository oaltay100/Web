using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.LekRow>;
using MyRow = LBYS.Lab.LekRow;

namespace LBYS.Lab
{
    public interface ILekRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LekRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILekRetrieveHandler
    {
        public LekRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}