using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.InstitutionPanelAssayRow>;
using MyRow = LBYS.Lab.InstitutionPanelAssayRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelAssayListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelAssayListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelAssayListHandler
    {
        public InstitutionPanelAssayListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}