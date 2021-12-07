using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.ChangeRow>;
using MyRow = LBYS.Lab.ChangeRow;

namespace LBYS.Lab
{
    public interface IChangeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ChangeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IChangeListHandler
    {
        public ChangeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}