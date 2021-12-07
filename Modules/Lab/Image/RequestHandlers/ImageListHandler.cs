using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.ImageRow>;
using MyRow = LBYS.Lab.ImageRow;

namespace LBYS.Lab
{
    public interface IImageListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ImageListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IImageListHandler
    {
        public ImageListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}