using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.ReferenceRow;

namespace LBYS.Lab
{
    public interface IReferenceDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ReferenceDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IReferenceDeleteHandler
    {
        public ReferenceDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}