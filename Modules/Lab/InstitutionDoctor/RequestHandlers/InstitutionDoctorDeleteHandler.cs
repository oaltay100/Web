using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.InstitutionDoctorRow;

namespace LBYS.Lab
{
    public interface IInstitutionDoctorDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionDoctorDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionDoctorDeleteHandler
    {
        public InstitutionDoctorDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}