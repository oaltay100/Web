using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.DoctorRow>;
using MyRow = LBYS.Lab.DoctorRow;

namespace LBYS.Lab
{
    public interface IDoctorListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DoctorListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDoctorListHandler
    {
        public DoctorListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}