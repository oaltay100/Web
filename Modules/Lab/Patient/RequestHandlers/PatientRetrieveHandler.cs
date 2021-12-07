using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.PatientRow>;
using MyRow = LBYS.Lab.PatientRow;

namespace LBYS.Lab
{
    public interface IPatientRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PatientRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPatientRetrieveHandler
    {
        public PatientRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}