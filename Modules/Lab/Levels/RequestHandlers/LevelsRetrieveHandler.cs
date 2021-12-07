using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.LevelsRow>;
using MyRow = LBYS.Lab.LevelsRow;

namespace LBYS.Lab
{
    public interface ILevelsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class LevelsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILevelsRetrieveHandler
    {
        public LevelsRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}