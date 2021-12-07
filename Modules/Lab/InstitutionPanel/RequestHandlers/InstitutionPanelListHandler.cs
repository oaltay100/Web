using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.InstitutionPanelRow>;
using MyRow = LBYS.Lab.InstitutionPanelRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelListHandler
    {
        public InstitutionPanelListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}