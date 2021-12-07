using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace LBYS.Lab.Forms
{
    [FormScript("Lab.Notification")]
    [BasedOnRow(typeof(NotificationRow), CheckNames = true)]
    public class NotificationForm
    {
        public Int32 UserId { get; set; }
        public String Message { get; set; }
    }
}