using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.MaterialRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.MaterialRow;

namespace LBYS.Lab
{
    public interface IMaterialSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MaterialSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMaterialSaveHandler
    {
        public MaterialSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}