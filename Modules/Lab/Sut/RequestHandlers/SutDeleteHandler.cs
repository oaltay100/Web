using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.SutRow;

namespace LBYS.Lab
{
    public interface ISutDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SutDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISutDeleteHandler
    {
        public SutDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}