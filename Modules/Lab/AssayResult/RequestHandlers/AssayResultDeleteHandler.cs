using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.AssayResultRow;

namespace LBYS.Lab
{
    public interface IAssayResultDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AssayResultDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAssayResultDeleteHandler
    {
        public AssayResultDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}