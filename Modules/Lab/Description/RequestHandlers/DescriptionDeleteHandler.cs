using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.DescriptionRow;

namespace LBYS.Lab
{
    public interface IDescriptionDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DescriptionDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDescriptionDeleteHandler
    {
        public DescriptionDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}