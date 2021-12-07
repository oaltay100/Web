using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.MaterialRow>;
using MyRow = LBYS.Lab.MaterialRow;

namespace LBYS.Lab
{
    public interface IMaterialRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MaterialRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMaterialRetrieveHandler
    {
        public MaterialRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}