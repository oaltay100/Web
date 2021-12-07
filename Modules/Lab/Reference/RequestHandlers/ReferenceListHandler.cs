using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.ReferenceRow>;
using MyRow = LBYS.Lab.ReferenceRow;

namespace LBYS.Lab
{
    public interface IReferenceListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ReferenceListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IReferenceListHandler
    {
        public ReferenceListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}