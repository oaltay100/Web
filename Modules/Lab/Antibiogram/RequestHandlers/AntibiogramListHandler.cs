using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.AntibiogramRow>;
using MyRow = LBYS.Lab.AntibiogramRow;

namespace LBYS.Lab
{
    public interface IAntibiogramListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AntibiogramListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAntibiogramListHandler
    {
        public AntibiogramListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}