using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.ControlRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.ControlRow;

namespace LBYS.Lab
{
    public interface IControlSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ControlSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IControlSaveHandler
    {
        public ControlSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}