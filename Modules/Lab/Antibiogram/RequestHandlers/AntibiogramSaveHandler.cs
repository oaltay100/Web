using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.AntibiogramRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.AntibiogramRow;

namespace LBYS.Lab
{
    public interface IAntibiogramSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AntibiogramSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAntibiogramSaveHandler
    {
        public AntibiogramSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}