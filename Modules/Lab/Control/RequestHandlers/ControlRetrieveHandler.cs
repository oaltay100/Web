using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.ControlRow>;
using MyRow = LBYS.Lab.ControlRow;

namespace LBYS.Lab
{
    public interface IControlRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ControlRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IControlRetrieveHandler
    {
        public ControlRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}