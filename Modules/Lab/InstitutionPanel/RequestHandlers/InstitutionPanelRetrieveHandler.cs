using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.InstitutionPanelRow>;
using MyRow = LBYS.Lab.InstitutionPanelRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelRetrieveHandler
    {
        public InstitutionPanelRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}