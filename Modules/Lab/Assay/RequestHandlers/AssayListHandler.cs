using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.AssayRow>;
using MyRow = LBYS.Lab.AssayRow;

namespace LBYS.Lab
{
    public interface IAssayListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AssayListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAssayListHandler
    {
        public AssayListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}