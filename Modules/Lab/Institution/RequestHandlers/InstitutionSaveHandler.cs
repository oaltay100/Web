using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.InstitutionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.InstitutionRow;

namespace LBYS.Lab
{
    public interface IInstitutionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class InstitutionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IInstitutionSaveHandler
    {
        public InstitutionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}