using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.InstitutionDoctorRow>;
using MyRow = LBYS.Lab.InstitutionDoctorRow;

namespace LBYS.Lab
{
    public interface IInstitutionDoctorListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionDoctorListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionDoctorListHandler
    {
        public InstitutionDoctorListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}