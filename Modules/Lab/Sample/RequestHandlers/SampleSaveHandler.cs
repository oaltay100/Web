using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.SampleRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.SampleRow;

namespace LBYS.Lab
{
    public interface ISampleSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class SampleSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISampleSaveHandler
    {
        public SampleSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}