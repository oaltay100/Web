using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.PatientRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.PatientRow;

namespace LBYS.Lab
{
    public interface IPatientSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PatientSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPatientSaveHandler
    {
        public PatientSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}