using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.LekRow;

namespace LBYS.Lab
{
    public interface ILekDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LekDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILekDeleteHandler
    {
        public LekDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}