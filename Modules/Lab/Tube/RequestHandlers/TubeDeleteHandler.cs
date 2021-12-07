using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.TubeRow;

namespace LBYS.Lab
{
    public interface ITubeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class TubeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITubeDeleteHandler
    {
        public TubeDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}