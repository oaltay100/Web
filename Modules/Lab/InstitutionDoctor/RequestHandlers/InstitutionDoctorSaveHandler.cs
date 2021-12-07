using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.InstitutionDoctorRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.InstitutionDoctorRow;

namespace LBYS.Lab
{
    public interface IInstitutionDoctorSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionDoctorSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionDoctorSaveHandler
    {
        public InstitutionDoctorSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}