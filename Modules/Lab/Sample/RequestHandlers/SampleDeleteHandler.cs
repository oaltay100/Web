using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.SampleRow;

namespace LBYS.Lab
{
    public interface ISampleDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class SampleDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISampleDeleteHandler
    {
        public SampleDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}