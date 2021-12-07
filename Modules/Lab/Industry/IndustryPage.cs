using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace LBYS.Lab.Pages
{

    [PageAuthorize(typeof(IndustryRow))]
    public class IndustryController : Controller
    {
        [Route("Lab/Industry")]
        public ActionResult Index()
        {
            return View("~/Modules/Lab/Industry/IndustryIndex.cshtml");
        }
    }
}