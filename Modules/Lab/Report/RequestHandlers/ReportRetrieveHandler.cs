using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.ReportRow>;
using MyRow = LBYS.Lab.ReportRow;

namespace LBYS.Lab
{
    public interface IReportRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IReportRetrieveHandler
    {
        public ReportRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}