using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.PatientRow>;
using MyRow = LBYS.Lab.PatientRow;

namespace LBYS.Lab
{
    public interface IPatientListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PatientListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPatientListHandler
    {
        public PatientListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}