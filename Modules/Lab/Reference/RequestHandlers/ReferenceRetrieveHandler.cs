using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.ReferenceRow>;
using MyRow = LBYS.Lab.ReferenceRow;

namespace LBYS.Lab
{
    public interface IReferenceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReferenceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IReferenceRetrieveHandler
    {
        public ReferenceRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}