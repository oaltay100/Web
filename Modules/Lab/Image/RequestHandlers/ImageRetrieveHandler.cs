using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.ImageRow>;
using MyRow = LBYS.Lab.ImageRow;

namespace LBYS.Lab
{
    public interface IImageRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ImageRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IImageRetrieveHandler
    {
        public ImageRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}