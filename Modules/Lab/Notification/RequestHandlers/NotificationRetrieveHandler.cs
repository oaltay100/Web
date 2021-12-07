using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<LBYS.Lab.NotificationRow>;
using MyRow = LBYS.Lab.NotificationRow;

namespace LBYS.Lab
{
    public interface INotificationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class NotificationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, INotificationRetrieveHandler
    {
        public NotificationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}