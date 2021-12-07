using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.MaterialRow;

namespace LBYS.Lab
{
    public interface IMaterialDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MaterialDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMaterialDeleteHandler
    {
        public MaterialDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}