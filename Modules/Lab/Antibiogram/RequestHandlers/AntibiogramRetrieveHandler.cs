using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.AntibiogramRow>;
using MyRow = LBYS.Lab.AntibiogramRow;

namespace LBYS.Lab
{
    public interface IAntibiogramRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AntibiogramRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAntibiogramRetrieveHandler
    {
        public AntibiogramRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}