using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.DeviceRow>;
using MyRow = LBYS.Lab.DeviceRow;

namespace LBYS.Lab
{
    public interface IDeviceRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DeviceRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDeviceRetrieveHandler
    {
        public DeviceRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}