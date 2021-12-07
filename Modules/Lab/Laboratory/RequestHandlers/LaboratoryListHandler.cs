using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.LaboratoryRow>;
using MyRow = LBYS.Lab.LaboratoryRow;

namespace LBYS.Lab
{
    public interface ILaboratoryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class LaboratoryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILaboratoryListHandler
    {
        public LaboratoryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}