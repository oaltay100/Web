using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.InstitutionDoctorRow>;
using MyRow = LBYS.Lab.InstitutionDoctorRow;

namespace LBYS.Lab
{
    public interface IInstitutionDoctorRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionDoctorRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionDoctorRetrieveHandler
    {
        public InstitutionDoctorRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}