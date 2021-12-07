using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.DoctorRow;

namespace LBYS.Lab
{
    public interface IDoctorDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DoctorDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorDeleteHandler
    {
        public DoctorDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}