using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.UnitRow>;
using MyRow = LBYS.Lab.UnitRow;

namespace LBYS.Lab
{
    public interface IUnitRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IUnitRetrieveHandler
    {
        public UnitRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}