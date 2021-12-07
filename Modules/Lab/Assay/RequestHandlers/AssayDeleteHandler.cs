using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.AssayRow;

namespace LBYS.Lab
{
    public interface IAssayDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AssayDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAssayDeleteHandler
    {
        public AssayDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}