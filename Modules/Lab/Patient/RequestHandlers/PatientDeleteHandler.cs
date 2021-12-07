using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.PatientRow;

namespace LBYS.Lab
{
    public interface IPatientDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PatientDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPatientDeleteHandler
    {
        public PatientDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}