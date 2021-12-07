using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.AssayResultRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.AssayResultRow;

namespace LBYS.Lab
{
    public interface IAssayResultSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssayResultSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAssayResultSaveHandler
    {
        public AssayResultSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}