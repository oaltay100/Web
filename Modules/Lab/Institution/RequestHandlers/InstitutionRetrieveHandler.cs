using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.InstitutionRow>;
using MyRow = LBYS.Lab.InstitutionRow;

namespace LBYS.Lab
{
    public interface IInstitutionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionRetrieveHandler
    {
        public InstitutionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}