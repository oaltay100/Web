using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.DeviceRow>;
using MyRow = LBYS.Lab.DeviceRow;

namespace LBYS.Lab
{
    public interface IDeviceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DeviceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDeviceListHandler
    {
        public DeviceListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}