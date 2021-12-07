using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.AntibiogramRow;

namespace LBYS.Lab
{
    public interface IAntibiogramDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AntibiogramDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAntibiogramDeleteHandler
    {
        public AntibiogramDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}