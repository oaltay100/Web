using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.InstitutionPanelRow;

namespace LBYS.Lab
{
    public interface IInstitutionPanelDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionPanelDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionPanelDeleteHandler
    {
        public InstitutionPanelDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}