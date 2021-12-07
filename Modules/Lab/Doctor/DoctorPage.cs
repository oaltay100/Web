using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(DoctorRow))]
    public class DoctorController : Controller
    {
        [Route("Lab/Doctor")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Doctor/DoctorIndex.cshtml");
        }
    }
}