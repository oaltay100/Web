using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.UnitRow>;
using MyRow = LBYS.Lab.UnitRow;

namespace LBYS.Lab
{
    public interface IUnitListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUnitListHandler
    {
        public UnitListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}