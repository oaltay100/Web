using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.InstitutionRow>;
using MyRow = LBYS.Lab.InstitutionRow;

namespace LBYS.Lab
{
    public interface IInstitutionListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionListHandler
    {
        public InstitutionListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}