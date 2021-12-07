using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.DeviceRow;

namespace LBYS.Lab
{
    public interface IDeviceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DeviceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDeviceDeleteHandler
    {
        public DeviceDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}