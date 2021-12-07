using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.TemplateRow>;
using MyRow = LBYS.Lab.TemplateRow;

namespace LBYS.Lab
{
    public interface ITemplateListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class TemplateListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateListHandler
    {
        public TemplateListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}