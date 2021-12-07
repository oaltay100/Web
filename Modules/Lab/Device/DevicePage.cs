using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(DeviceRow))]
    public class DeviceController : Controller
    {
        [Route("Lab/Device")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Device/DeviceIndex.cshtml");
        }
    }
}