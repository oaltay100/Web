using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<LBYS.Lab.NotificationRow>;
using MyRow = LBYS.Lab.NotificationRow;

namespace LBYS.Lab
{
    public interface INotificationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class NotificationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, INotificationListHandler
    {
        public NotificationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}