using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.BacteriumRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.BacteriumRow;

namespace LBYS.Lab
{
    public interface IBacteriumSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BacteriumSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBacteriumSaveHandler
    {
        public BacteriumSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}