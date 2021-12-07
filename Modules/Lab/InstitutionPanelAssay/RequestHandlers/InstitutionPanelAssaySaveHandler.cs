using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.InstitutionPanelAssayRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.InstitutionPanelAssayRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelAssaySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelAssaySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelAssaySaveHandler
    {
        public InstitutionPanelAssaySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}