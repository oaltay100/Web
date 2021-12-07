using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.AcceptRow;

namespace LBYS.Lab
{
    public interface IAcceptDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AcceptDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAcceptDeleteHandler
    {
        public AcceptDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}