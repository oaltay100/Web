using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.IndustryRow>;
using MyRow = LBYS.Lab.IndustryRow;

namespace LBYS.Lab
{
    public interface IIndustryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class IndustryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IIndustryRetrieveHandler
    {
        public IndustryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}