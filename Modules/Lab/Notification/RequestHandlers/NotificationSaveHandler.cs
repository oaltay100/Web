using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<LBYS.Lab.NotificationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = LBYS.Lab.NotificationRow;

namespace LBYS.Lab
{
    public interface INotificationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class NotificationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, INotificationSaveHandler
    {
        public NotificationSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}