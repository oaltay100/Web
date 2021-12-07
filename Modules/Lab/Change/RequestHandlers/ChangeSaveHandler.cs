using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.ChangeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.ChangeRow;

namespace LBYS.Lab
{
    public interface IChangeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ChangeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IChangeSaveHandler
    {
        public ChangeSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}