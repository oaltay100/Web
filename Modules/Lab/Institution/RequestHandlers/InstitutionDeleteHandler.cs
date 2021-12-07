using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.InstitutionRow;

namespace LBYS.Lab
{
    public interface IInstitutionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionDeleteHandler
    {
        public InstitutionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}