using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.CodeRow>;
using MyRow = LBYS.Lab.CodeRow;

namespace LBYS.Lab
{
    public interface ICodeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class CodeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICodeRetrieveHandler
    {
        public CodeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}