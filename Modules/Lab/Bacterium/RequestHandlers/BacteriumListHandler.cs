using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.BacteriumRow>;
using MyRow = LBYS.Lab.BacteriumRow;

namespace LBYS.Lab
{
    public interface IBacteriumListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BacteriumListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBacteriumListHandler
    {
        public BacteriumListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}