using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.IndustryRow;

namespace LBYS.Lab
{
    public interface IIndustryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class IndustryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IIndustryDeleteHandler
    {
        public IndustryDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}