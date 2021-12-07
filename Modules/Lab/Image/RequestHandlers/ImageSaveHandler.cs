using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.ImageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.ImageRow;

namespace LBYS.Lab
{
    public interface IImageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ImageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IImageSaveHandler
    {
        public ImageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}