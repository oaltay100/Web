using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.CodeRow;

namespace LBYS.Lab
{
    public interface ICodeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class CodeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICodeDeleteHandler
    {
        public CodeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}