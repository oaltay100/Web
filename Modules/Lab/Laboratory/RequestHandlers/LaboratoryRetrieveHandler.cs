using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.LaboratoryRow>;
using MyRow = LBYS.Lab.LaboratoryRow;

namespace LBYS.Lab
{
    public interface ILaboratoryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LaboratoryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILaboratoryRetrieveHandler
    {
        public LaboratoryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}