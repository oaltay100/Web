using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.CodeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.CodeRow;

namespace LBYS.Lab
{
    public interface ICodeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class CodeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICodeSaveHandler
    {
        public CodeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}