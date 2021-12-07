using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.ReportRow>;
using MyRow = LBYS.Lab.ReportRow;

namespace LBYS.Lab
{
    public interface IReportListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IReportListHandler
    {
        public ReportListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}