using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.ReferenceRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.ReferenceRow;

namespace LBYS.Lab
{
    public interface IReferenceSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ReferenceSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IReferenceSaveHandler
    {
        public ReferenceSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}