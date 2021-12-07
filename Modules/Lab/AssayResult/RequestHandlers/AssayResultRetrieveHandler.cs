using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.AssayResultRow>;
using MyRow = LBYS.Lab.AssayResultRow;

namespace LBYS.Lab
{
    public interface IAssayResultRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssayResultRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAssayResultRetrieveHandler
    {
        public AssayResultRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}