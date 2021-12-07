using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.DetailRow>;
using MyRow = LBYS.Lab.DetailRow;

namespace LBYS.Lab
{
    public interface IDetailRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DetailRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDetailRetrieveHandler
    {
        public DetailRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}