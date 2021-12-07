using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.InstitutionPanelAssayRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelAssayDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelAssayDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelAssayDeleteHandler
    {
        public InstitutionPanelAssayDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}