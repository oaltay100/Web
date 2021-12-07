using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.TubeRow>;
using MyRow = LBYS.Lab.TubeRow;

namespace LBYS.Lab
{
    public interface ITubeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TubeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITubeListHandler
    {
        public TubeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}