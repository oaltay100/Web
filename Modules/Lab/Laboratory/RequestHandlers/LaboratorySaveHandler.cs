using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.LaboratoryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.LaboratoryRow;

namespace LBYS.Lab
{
    public interface ILaboratorySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LaboratorySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILaboratorySaveHandler
    {
        public LaboratorySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}