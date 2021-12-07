using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.TubeRow>;
using MyRow = LBYS.Lab.TubeRow;

namespace LBYS.Lab
{
    public interface ITubeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TubeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITubeRetrieveHandler
    {
        public TubeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}