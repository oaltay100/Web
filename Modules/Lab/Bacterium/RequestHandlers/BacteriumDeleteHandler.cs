using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.BacteriumRow;

namespace LBYS.Lab
{
    public interface IBacteriumDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class BacteriumDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IBacteriumDeleteHandler
    {
        public BacteriumDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}