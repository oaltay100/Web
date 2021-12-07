using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.InstitutionPanelAssayRow>;
using MyRow = LBYS.Lab.InstitutionPanelAssayRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelAssayRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelAssayRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelAssayRetrieveHandler
    {
        public InstitutionPanelAssayRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}