using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.BacteriumRow>;
using MyRow = LBYS.Lab.BacteriumRow;

namespace LBYS.Lab
{
    public interface IBacteriumRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class BacteriumRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IBacteriumRetrieveHandler
    {
        public BacteriumRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}