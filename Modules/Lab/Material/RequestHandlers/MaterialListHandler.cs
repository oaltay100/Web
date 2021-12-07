using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.MaterialRow>;
using MyRow = LBYS.Lab.MaterialRow;

namespace LBYS.Lab
{
    public interface IMaterialListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class MaterialListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IMaterialListHandler
    {
        public MaterialListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}