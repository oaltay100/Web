using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.DetailRow;

namespace LBYS.Lab
{
    public interface IDetailDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class DetailDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IDetailDeleteHandler
    {
        public DetailDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}