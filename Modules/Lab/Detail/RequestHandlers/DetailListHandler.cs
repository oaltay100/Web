using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.DetailRow>;
using MyRow = LBYS.Lab.DetailRow;

namespace LBYS.Lab
{
    public interface IDetailListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DetailListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDetailListHandler
    {
        public DetailListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}