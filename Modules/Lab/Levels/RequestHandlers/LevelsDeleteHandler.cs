using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.LevelsRow;

namespace LBYS.Lab
{
    public interface ILevelsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class LevelsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILevelsDeleteHandler
    {
        public LevelsDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}