using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.AssayRow>;
using MyRow = LBYS.Lab.AssayRow;

namespace LBYS.Lab
{
    public interface IAssayRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AssayRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAssayRetrieveHandler
    {
        public AssayRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}