using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.TemplateRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.TemplateRow;

namespace LBYS.Lab
{
    public interface ITemplateSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateSaveHandler
    {
        public TemplateSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}