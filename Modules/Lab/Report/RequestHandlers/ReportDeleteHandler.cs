using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.ReportRow;

namespace LBYS.Lab
{
    public interface IReportDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IReportDeleteHandler
    {
        public ReportDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}