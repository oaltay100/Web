using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.DescriptionRow>;
using MyRow = LBYS.Lab.DescriptionRow;

namespace LBYS.Lab
{
    public interface IDescriptionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DescriptionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDescriptionListHandler
    {
        public DescriptionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}