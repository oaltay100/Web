using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = LBYS.Lab.NotificationRow;

namespace LBYS.Lab
{
    public interface INotificationDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class NotificationDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, INotificationDeleteHandler
    {
        public NotificationDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}