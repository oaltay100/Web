using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.InstitutionPanelRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.InstitutionPanelRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelSaveHandler
    {
        public InstitutionPanelSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}