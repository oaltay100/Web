using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.LevelsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.LevelsRow;

namespace LBYS.Lab
{
    public interface ILevelsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class LevelsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILevelsSaveHandler
    {
        public LevelsSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}