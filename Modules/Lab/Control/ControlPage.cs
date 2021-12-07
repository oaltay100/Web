using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(ControlRow))]
    public class ControlController : Controller
    {
        [Route("Lab/Control")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Control/ControlIndex.cshtml");
        }
    }
}