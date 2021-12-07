using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.ChangeRow;

namespace LBYS.Lab
{
    public interface IChangeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ChangeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IChangeDeleteHandler
    {
        public ChangeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}