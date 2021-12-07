using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.SutRow>;
using MyRow = LBYS.Lab.SutRow;

namespace LBYS.Lab
{
    public interface ISutRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SutRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISutRetrieveHandler
    {
        public SutRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}