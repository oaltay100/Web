using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.DoctorRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.DoctorRow;

namespace LBYS.Lab
{
    public interface IDoctorSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DoctorSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorSaveHandler
    {
        public DoctorSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}