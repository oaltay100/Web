using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.CodeRow>;
using MyRow = LBYS.Lab.CodeRow;

namespace LBYS.Lab
{
    public interface ICodeListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class CodeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICodeListHandler
    {
        public CodeListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}