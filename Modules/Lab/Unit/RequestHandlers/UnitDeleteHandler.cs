using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.UnitRow;

namespace LBYS.Lab
{
    public interface IUnitDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class UnitDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IUnitDeleteHandler
    {
        public UnitDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}