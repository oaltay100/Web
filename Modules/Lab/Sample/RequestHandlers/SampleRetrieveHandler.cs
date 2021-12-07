using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.SampleRow>;
using MyRow = LBYS.Lab.SampleRow;

namespace LBYS.Lab
{
    public interface ISampleRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class SampleRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISampleRetrieveHandler
    {
        public SampleRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}