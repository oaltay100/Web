using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(NotificationRow))]
    public class NotificationController : Controller
    {
        [Route("Lab/Notification")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Notification/NotificationIndex.cshtml");
        }
    }
}