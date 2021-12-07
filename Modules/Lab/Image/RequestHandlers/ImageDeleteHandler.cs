using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.ImageRow;

namespace LBYS.Lab
{
    public interface IImageDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ImageDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IImageDeleteHandler
    {
        public ImageDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}