using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.AssayResultRow>;
using MyRow = LBYS.Lab.AssayResultRow;

namespace LBYS.Lab
{
    public interface IAssayResultListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AssayResultListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAssayResultListHandler
    {
        public AssayResultListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}