using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.ChangeRow>;
using MyRow = LBYS.Lab.ChangeRow;

namespace LBYS.Lab
{
    public interface IChangeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ChangeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IChangeRetrieveHandler
    {
        public ChangeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}