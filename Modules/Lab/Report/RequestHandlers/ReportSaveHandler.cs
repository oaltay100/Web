using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.ReportRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.ReportRow;

namespace LBYS.Lab
{
    public interface IReportSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReportSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IReportSaveHandler
    {
        public ReportSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}