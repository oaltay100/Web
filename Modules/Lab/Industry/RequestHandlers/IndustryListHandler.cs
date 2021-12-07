using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.IndustryRow>;
using MyRow = LBYS.Lab.IndustryRow;

namespace LBYS.Lab
{
    public interface IIndustryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class IndustryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IIndustryListHandler
    {
        public IndustryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}