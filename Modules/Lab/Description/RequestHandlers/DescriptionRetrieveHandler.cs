using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.DescriptionRow>;
using MyRow = LBYS.Lab.DescriptionRow;

namespace LBYS.Lab
{
    public interface IDescriptionRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DescriptionRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDescriptionRetrieveHandler
    {
        public DescriptionRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}