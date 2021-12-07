using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.SampleRow>;
using MyRow = LBYS.Lab.SampleRow;

namespace LBYS.Lab
{
    public interface ISampleListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class SampleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISampleListHandler
    {
        public SampleListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}