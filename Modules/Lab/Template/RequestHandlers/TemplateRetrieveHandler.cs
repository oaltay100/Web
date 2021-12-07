using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.TemplateRow>;
using MyRow = LBYS.Lab.TemplateRow;

namespace LBYS.Lab
{
    public interface ITemplateRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateRetrieveHandler
    {
        public TemplateRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}