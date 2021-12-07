using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.AcceptRow>;
using MyRow = LBYS.Lab.AcceptRow;

namespace LBYS.Lab
{
    public interface IAcceptRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AcceptRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAcceptRetrieveHandler
    {
        public AcceptRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}