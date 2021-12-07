using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.ControlRow;

namespace LBYS.Lab
{
    public interface IControlDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ControlDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IControlDeleteHandler
    {
        public ControlDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}