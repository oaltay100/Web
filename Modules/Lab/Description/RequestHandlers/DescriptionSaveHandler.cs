using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.DescriptionRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.DescriptionRow;

namespace LBYS.Lab
{
    public interface IDescriptionSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DescriptionSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDescriptionSaveHandler
    {
        public DescriptionSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}