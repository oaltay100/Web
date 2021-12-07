using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.DeviceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.DeviceRow;

namespace LBYS.Lab
{
    public interface IDeviceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DeviceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDeviceSaveHandler
    {
        public DeviceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}